import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.logOut();
  }

  public logOut(): void {
    localStorage.removeItem('token');
    console.log("You have been logged out of the system.")
  }

}
