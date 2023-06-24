import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventService } from '../services/event.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {

  eventName: string;
  startDate: Date = new Date(1990, 0, 1);
  endDate: Date;
  track: string;
  branch: string; // Replace with your actual branch data
  state: string;
  city: string;
  street: string;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly eventService: EventService, private location: Location) { }


  ngOnInit(): void {
    const today = new Date();
    this.minDate.setDate(today.getDate() - 1);
    this.maxDate.setDate(today.getDate() + 6);
  }

  closeDialog(): void {
    // this.data.close();
  }

  refresh(): void {
    this.location.go(this.location.path());
    window.location.reload();
  }

  saveEvent(): void {

    const eventInfo = {
      eventName: this.eventName,
      startDate: this.startDate,
      endDate: this.endDate,
      country: "Egypt",
      state: this.street,
      city: this.city,
      street: this.street

    }

    this.eventService.createEvent(eventInfo).subscribe((response) => {
      console.log(response)
      console.log("Event Saved Successfully")
      this.refresh()
    },
      (error) => {
        console.log(error)
      }
    )
  }


  date = new FormControl(this.getMonthYearString(new Date()));
  minDate = new Date();
  maxDate = new Date();


  chosenYearHandler(normalizedYear: Date) {
    const ctrlValue = this.getDateFromString(this.date.value);
    ctrlValue.setFullYear(normalizedYear.getFullYear());
    this.date.setValue(this.getMonthYearString(ctrlValue));
  }

  chosenMonthHandler(normlizedMonth: Date, datepicker: MatDatepicker<Date>) {
    const ctrlValue = this.getDateFromString(this.date.value);
    ctrlValue.setMonth(normlizedMonth.getMonth());
    this.date.setValue(this.getMonthYearString(ctrlValue));
    datepicker.close();
  }

  private getMonthYearString(date: Date): string {
    return `${date.getMonth() + 1}/${date.getFullYear()}`;
  }
  private getDateFromString(s: string): Date {
    if ((s.match(/\//g) || []).length !== 1) {
      return new Date();
    }
    if (isNaN(+s.replace('/', ''))) {
      return new Date();
    }
    const [mm, yyyy] = s.split('/');
    return new Date(+yyyy, +mm + 1, 1);
  }

}
