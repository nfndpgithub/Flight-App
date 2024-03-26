import { Time } from '@angular/common';
import { Flight } from './flight'; 

export interface Reservation {
  id: number;
  userId: number;
  flight: Flight; 
  reservationTime: Time;
  status: string;
  numberOfSeats: number;
}
