import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { getAnalytics } from "firebase/analytics";

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AvatarModule } from 'primeng/avatar';


const firebaseConfig = {
  apiKey: "AIzaSyAB6_7rmc5Ipq_XsAukuO6j0tNerdJweV4",
  authDomain: "careethub.firebaseapp.com",
  projectId: "careethub",
  storageBucket: "careethub.appspot.com",
  messagingSenderId: "871282529958",
  appId: "1:871282529958:web:da6149c1f148519beec667",
  measurementId: "G-SSNN1GLDPQ"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideStorage(() => getStorage()),
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
