import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService:AuthService,private navRoute: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.navRoute.navigate(['login'])
  }

}
