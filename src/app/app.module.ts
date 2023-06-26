import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { getAnalytics } from "firebase/analytics";

import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

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

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input'
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { AddCompanyModalComponent } from './add-track-modal/add-track-modal.component';
import { MatTableModule } from '@angular/material/table';
import { DataService } from './admin/tables/data.service';
import { ApproveInterviewComponent } from './approve-interview/approve-interview.component';

@NgModule({
  declarations: [AppComponent, ExamplePdfViewerComponent, AddModalComponent, AddCompanyModalComponent, ApproveInterviewComponent],
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
    AvatarModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatNativeDateModule,
    MatNativeDateModule,
    MatInputModule,
    MatChipsModule,
    FormsModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
