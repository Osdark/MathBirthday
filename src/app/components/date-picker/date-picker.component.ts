import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {

  mathBirthday = 0;
  now = new Date();
  diffDay = 0;
  private MsPerDay = 1000*60*60*24;
  daysRemaining = 0;
  showDescription = false;

  constructor() { }

  getDiffDay(date: MatDatepickerInputEvent<Date>) {
    this.diffDay = Math.floor((this.now.getTime() - date.value.getTime())/this.MsPerDay);
    this.mathBirthday = this.get10n(this.diffDay);
    this.daysRemaining = this.mathBirthday - this.diffDay;
    this.showDescription = this.daysRemaining > 0;
  }

  get10n(diffDay: number): number {
    const exp = diffDay.toString().length;
    return Math.pow(10, exp);
  }

  getMathBirthday(): Date {
    const nextMathBirthdayDate = new Date();
    nextMathBirthdayDate.setDate(this.now.getDate() + this.daysRemaining);
    return nextMathBirthdayDate;
  }

}
