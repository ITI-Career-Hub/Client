import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { authAPI, frontAPI } from '../../../../constants';
import jwtDecode from 'jwt-decode';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private authorizationEndpoint = `${authAPI}/oauth2/authorize`;
  private tokenEndpoint = `${authAPI}/oauth2/token`;
  private clientId = 'client';
  private redirectUri = `${frontAPI}/login`;
  // private redirectUri = 'http://localhost:8888/authorized';


  constructor(private studentService: StudentService, private http: HttpClient, private route: ActivatedRoute, private navRoute: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];

      console.log(params)

      if (code) {
        // Proceed with exchanging authorization code for access token
        this.exchangeCodeForToken(code);
      }
    });
  }

  exchangeCodeForToken(code: string) {
    const codeVerifier = "J0_D1-mu85IEM27JDkJSAABm7ouWlvrdyBTHH1PyVqQ";// this.getCodeVerifierFromStorage(); // Retrieve the code verifier from storage (e.g., local storage)


    const body = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('client_id', this.clientId);
    body.set('redirect_uri', this.redirectUri);
    body.set('code_verifier', codeVerifier);
    body.set('code', code);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(this.clientId + ':secret') // Add Basic Authentication header
    });


    const queryParams = body.toString();
    const url = `${this.tokenEndpoint}?${queryParams}`;


    console.log(this.tokenEndpoint + "?" + body.toString())
    this.http.post<any>(url, null, { headers: headers })
      .subscribe(
        response => {
          const accessToken = response.access_token;
          this.storeAccessToken(accessToken);
          this.navRoute.navigate(['/profile']);
        },
        error => {
          console.error('Error exchanging authorization code for access token:', error);
        }
      );
  }


  getCodeVerifierFromStorage(): string {
    const codeVerifier = localStorage.getItem('codeVerifier');
    return codeVerifier;
  }

  storeAccessToken(accessToken: string) {
    // Store the access token securely (e.g., in local storage or state management)
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('isLoggedin', "true")
    const payload = jwtDecode(accessToken);
    localStorage.setItem('role', payload["roles"])
    console.log(payload)
    if (true) {
      this.studentService.studentData(payload["sub"], accessToken).subscribe(response => {
        localStorage.setItem('userInfo', JSON.stringify(response))
      },
        error => {
          console.error('Error exchanging authorization code for access token:', error);
        }
      );
    }

  }






  onLogin() {

    const codeVerifier = "J0_D1-mu85IEM27JDkJSAABm7ouWlvrdyBTHH1PyVqQ";
    const codeChallenge = "7OXjbzepcxSfp46SRrTjpf7t_SV5oUcJUP-or6QwrQQ"
    // const state = this.generateState();

    const authorizationUrl = `${this.authorizationEndpoint}?response_type=code&client_id=${this.clientId}&redirect_uri=${this.redirectUri}&code_challenge=${codeChallenge}&code_challenge_method=S256`;
    // const authorizationUrl = 'http://localhost:8888/oauth2/authorize?response_type=code&client_id=client&scope=openid&redirect_uri=http://localhost:8888/authorized&code_challenge=J0_D1-mu85IEM27JDkJSAABm7ouWlvrdyBTHH1PyVqQ&code_challenge_method=S256';
    window.location.href = authorizationUrl;
  }
}
