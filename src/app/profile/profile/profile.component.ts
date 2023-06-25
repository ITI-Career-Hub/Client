import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  interviews = [];
  userInfo;
  user = JSON.parse(localStorage.getItem('userInfo'));

  constructor(private profileService: ProfileService) {
    console.log(this.user)
  }

  ngOnInit(): void {
    this.profileService.getStudentsInterviews(this.user.id).subscribe(
      (response) => {
        this.interviews = response;
        console.log(response);
      },
      (error) => {
        console.error('Error', error);
      }
    );

    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.image = this.userInfo["pictureUrl"]
    this.name = this.userInfo["username"]
  }


  avatarImageUrl: string = 'assets/default-avatar.png';

  vatarImageUrl: string = 'assets/default-avatar.png'; // Default avatar image URL

  handleImageError() {
    this.avatarImageUrl = 'assets/default-avatar.png'; // Handle image loading errors by setting a default avatar image
  }


  progressPercent: number = 0;
  name: string;

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
