import { Time } from "@angular/common";


export interface Flight {
  id: number;
  departure: string;
  destination: string;
  time: Time;
  capacity: number;
  stops: number;
}
