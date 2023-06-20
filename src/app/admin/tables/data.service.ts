import { Injectable } from '@angular/core';
export interface UserData {
  id: string;
  trackName: string;
  date: string;
  interviewer: string;
  candidatesNum: number;
  color: string;
}

@Injectable()
export class DataService {
  private readonly colors = [
    'maroon',
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'purple',
    'fuchsia',
    'lime',
    'teal',
    'aqua',
    'blue',
    'navy',
    'black',
    'gray'
  ];
  private readonly interviewer = [
    'Ahmed Mohamed'
  ];

  constructor() { }

  createNewUser(id: number): UserData {
    const trackName = "Enterprise Web Applications";
    // this.names[this.getRandomArrayIndex(this.names.length)] +
    // ' ' +
    // this.names[this.getRandomArrayIndex(this.names.length)].charAt(0) +
    // '.';

    return {
      id: id.toString(),
      trackName: trackName,
      interviewer: this.interviewer[this.getRandomArrayIndex(this.interviewer.length)],
      date: new Date().toLocaleDateString(),
      candidatesNum: 30,
      color: this.colors[this.getRandomArrayIndex(this.colors.length)]
    };
  }

  create100Users(): UserData[] {
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) {
      users.push(this.createNewUser(i));
    }
    return users;
  }

  private getRandomArrayIndex(length: number): number {
    return Math.round(Math.random() * (length - 1));
  }
}
