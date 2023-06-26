import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventService } from '../services/event.service';
import { Location } from '@angular/common';
import { RoomService } from '../services/room.service';
import { AppointemtService } from '../services/appointemt.service';

@Component({
  selector: 'app-approve-interview',
  templateUrl: './approve-interview.component.html',
  styleUrls: ['./approve-interview.component.scss']
})
export class ApproveInterviewComponent implements OnInit {

  eventName: string;
  startDate: Date = new Date(1990, 0, 1);
  endDate: Date;
  track: string;
  branch: string; // Replace with your actual branch data
  state: string;
  city: string;
  street: string;
  room: any;

  constructor(private appointmentService: AppointemtService, private roomService: RoomService, @Inject(MAT_DIALOG_DATA) public data: any, private readonly eventService: EventService, private location: Location) { }


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
    console.log(this.data.tab)


    const requestData = {
      appointmentDate: this.formData.date,
      roomId: this.room
    }


    console.log(requestData)
    this.appointmentService.approveInterview(this.data.tab["id"], requestData)
      .subscribe((response) => {
        console.log(response)
      }, (error) => {
        console.log(error)
      })

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

  formData = {
    date: null,
    room: ''
  };

  rooms: any = [];


  getAvailableRooms(dateString: any) {
    console.log('Selected Room:');

    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding zero-padding
    const day = String(date.getDate()).padStart(2, '0'); // Adding zero-padding

    this.formData.date = `${year}-${month}-${day}`

    this.roomService.getAvailableRoom(`${year}-${month}-${day}`).subscribe((response) => {
      this.rooms = response
      console.log(response)
    }, (error) => {
      console.log(error)
    })
  }

  handelRoom(selectedRoom: string): void {
    console.log("RR " + selectedRoom)
    this.room = selectedRoom
  }

}
