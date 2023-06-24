import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  interviews = [];

  user = JSON.parse(localStorage.getItem('userInfo'));

  constructor(private profileService:ProfileService) { 
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
  }

}
