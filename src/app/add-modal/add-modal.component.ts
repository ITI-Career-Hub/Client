import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {

  eventName: string;
  startDate: Date;
  endDate: Date;
  selectedBranch: string;
  branch: string; // Replace with your actual branch data

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
  }

  closeDialog(): void {
    this.data.close();
  }

  saveEvent(): void {
    // Perform the necessary actions to save the event
    // You can access the entered data using this.eventName, this.startDate, this.endDate, and this.selectedBranch
    // Example: console.log(this.eventName, this.startDate, this.endDate, this.selectedBranch);
    this.data.close(true);
  }


}
