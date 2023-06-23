import { Component, OnInit, ViewChild } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'country-list';
import * as countryList from 'country-list';
import { CompanyService } from 'src/app/services/company.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { getDownloadURL } from '@firebase/storage';


@Component({
  selector: 'app-company-owner-register',
  templateUrl: './company-owner-register.component.html',
  styleUrls: ['./company-owner-register.component.scss']
})
export class CompanyOwnerRegisterComponent implements OnInit {

  token: string;

  companyName: string;
  email: string;
  description: string;
  password: string;
  firstName: string;
  lastName: string;
  city: string;
  street: string;
  state: string;
  showSpinner: boolean = false;


  selectedCountry: string;
  countries: { name: string, flag: string }[];


  constructor(private route: ActivatedRoute, private companyService: CompanyService, private readonly storage: Storage) {

    this.countries = countryList.getData().map((country: Country) => {
      return {
        name: country.name,
        flag: `https://flagcdn.com/16x12/${country.code.toLowerCase()}.png`
      };
    });
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log('Token:', this.token);
    this.registerNewStudent()
  }


  registerNewStudent() {
    this.companyService.validateToken(this.token).subscribe(
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

  async registerCompany(image: any) {

    this.showSpinner = true;

    const imageLink = await this.uploadFile(image);
    console.log(imageLink)
    const data = {
      password: this.password,
      companyName: this.companyName,
      description: this.description,
      technologies: this.technologies,
      country: this.selectedCountry,
      state: this.state,
      city: this.city,
      street: this.street,
      pictureUrl: imageLink
    }

    this.companyService.registerFullCompanyInfo(this.token, data).subscribe(
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

