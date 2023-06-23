import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { getDownloadURL } from '@firebase/storage';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';



@Component({
  selector: 'app-staff-owner-register',
  templateUrl: './staff-owner-register.component.html',
  styleUrls: ['./staff-owner-register.component.scss']
})
export class StaffOwnerRegisterComponent implements OnInit {
  token: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  showSpinner: boolean = false;


  constructor(private route: ActivatedRoute, private staffService: StaffService, private readonly storage: Storage) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log('Token:', this.token);
    this.validateToken()
  }


  validateToken() {
    this.staffService.validateToken(this.token).subscribe(
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

  async createStaff(image: any) {

    this.showSpinner = true;
    const imageLink = await this.uploadFile(image);

    const data = {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      pictureUrl: imageLink
    };

    this.staffService.registerFullStaffInfo(this.token, data).subscribe(
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
              // this.setProgresspercent(progress);
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



  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  technologies: string[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.technologies.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(technology: string): void {
    const index = this.technologies.indexOf(technology);

    if (index >= 0) {
      this.technologies.splice(index, 1);
    }
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

}

