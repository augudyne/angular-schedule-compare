import {Component, Input} from '@angular/core';

@Component({
  selector: 'upload-display',
  templateUrl: './upload-display.component.html',
  styleUrls: ['./upload-display.component.css']
})



export class UploadDisplayComponent {
  hours: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  availabilityToDisplay: Object;
  startHour = 0;
  endHour = 24;
  validDisplay = false;
  times: string[] = ['---------', '00:00 - 00:30', '00:30 - 01:00', '01:00 - 01:30', '01:30 - 02:00',
    '02:00 - 02:30', '02:30 - 03:00', '03:00 - 03:30', '03:30 - 04:00', '04:00 - 04:30',
    '04:30 - 05:00', '05:00 - 05:30', '05:30 - 06:00', '06:00 - 06:30', '06:30 - 07:00',
    '07:00 - 07:30', '07:30 - 08:00', '08:00 - 08:30', '08:30 - 09:00', '09:00 - 09:30',
    '09:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00', '11:00 - 11:30', '11:30 - 12:00',
    '12:00 - 12:30', '12:30 - 13:00', '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30',
    '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00',
    '17:00 - 17:30', '17:30 - 18:00', '18:00 - 18:30', '18:30 - 19:00', '19:00 - 19:30',
    '19:30 - 20:00', '20:00 - 20:30', '20:30 - 21:00', '21:00 - 21:30', '21:30 - 22:00',
    '22:00 - 22:30', '22:30 - 23:00', '23:00 - 23:30', '23:30 - 24:00'];
  timesToDisplay = this.times;

  updateAvailabilityToDisplay() {

  }

  updateStartTime(hourSelected: number): void {
    const timesArray: string[] = this.times;
    timesArray.concat(this.times.slice(this.startHour, this.endHour * 2));
    this.timesToDisplay = timesArray;
    // this.availabilityToDisplay = this.updateAvailabilityToDisplay();
  }

  // updateEndTime(hourSelects: number): void {
  //   const
  //
  //
  //
  // }
  @Input() set availability (availability: Object){
    //clean the incoming availability to only display the relevant fields

  }
}




