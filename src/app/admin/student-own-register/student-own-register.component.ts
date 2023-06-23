import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { FormControl } from '@angular/forms';
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { getDownloadURL } from '@firebase/storage';


@Component({
  selector: 'app-student-own-register',
  templateUrl: './student-own-register.component.html',
  styleUrls: ['./student-own-register.component.scss']
})
export class StudentOwnRegisterComponent implements OnInit {



  constructor(private route: ActivatedRoute, private studentService: StudentService, private readonly storage: Storage) { }

  token: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  college: string;
  phoneNumber: string;
  graduationYear: number;
  showSpinner: boolean = false;


  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log('Token:', this.token);
    this.registerNewStudent();
  }


  selectedFileName: string;

  handleFileChange(event: any) {
    const file = event.target.files[0];
    this.selectedFileName = file ? file.name : '';
    // Additional logic if needed
  }

  registerNewStudent() {
    this.studentService.validateToken(this.token).subscribe(
      (response) => {
        this.email = response["email"]
        console.log('valid token', response);
        // Handle the response from the server
      },
      (error) => {
        console.error('Error making POST request', error);
        // Handle the error
      }
    );
  }


  onLogin() { }

  async createUser(cv: any, img: any) {
    this.showSpinner = true;

    const cvLink = await this.uploadFile(cv);
    const imgLink = await this.uploadFile(img);

    console.log("CV Link:: " + cvLink)
    console.log("Img Link:: " + imgLink)
    const data = {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      college: this.college,
      phoneNumber: this.phoneNumber,
      graduationYear: this.graduationYear
    };

    this.studentService.createStudent(data, this.token).subscribe(
      (response) => {
        console.log('valid token', response);
        // Handle the response from the server
      },
      (error) => {
        console.error('Error making POST request', error);
        // Handle the error
      }
    );

    this.showSpinner = false;
  }



  async uploadFile(input: HTMLInputElement): Promise<string | null> {
    if (!input.files) return null;

    const files: FileList = input.files;

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        const storageRef = ref(this.storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        await new Promise<void>((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              this.setProgresspercent(progress);
            },
            (error) => {
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log(downloadURL);
                resolve();
              });
            }
          );
        });

        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        return downloadURL;
      }
    }

    return null;
  }


  avatarImageUrl: string = 'assets/default-avatar.png'; // Default avatar image URL

  handleImageError() {
    this.avatarImageUrl = 'assets/default-avatar.png'; // Handle image loading errors by setting a default avatar image
  }


  progressPercent: number = 0;

  image: string | null = null;
  @ViewChild('imageInput') imageInput: any;

  openImagePicker() {
    this.imageInput.nativeElement.click();
  }

  handleImageChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.image = e.target.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }

  }
  private setProgresspercent(progress: number): void {
    this.progressPercent = progress;
  }

}
