import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { UserService } from './user/user.service';
import { response } from 'express';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public users: User[] | undefined;
  title = 'FlightApp';

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers():void{
    this.userService.getUsers().subscribe((response: User[])=>{
      this.users=response;
    },
    (error: HttpErrorResponse)=>{
      alert(error.message);
    }
    );
  }
}
