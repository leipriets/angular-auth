import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Auth } from "../../classes/auth";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public message = '';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/auth/user')
      .subscribe((user: any) => {
        this.message = `Hi ${user.first_name} ${user.last_name}`;
        Auth.authEmitter.emit(true);
      },
      (error) => {
        this.message = 'You are not logged in!';
        Auth.authEmitter.emit(false);

      }
    );
  }

}
