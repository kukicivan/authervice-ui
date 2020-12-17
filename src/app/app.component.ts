import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthenticationService } from "./shared-library/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'build-a-team-ui';

  public tokenData: any

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    // Set isLoggedIn property of Authentication service
    // Resolve performance issue by accessing property from template
    if (this.authenticationService.token) {
      this.authenticationService.isLoggedIn = true;
    }
  }

  public logOut(): void {
    this.authenticationService.logOut();
    this.router.navigate(['/login']);

  }

  getTokenData(): any {
    const tokenData = this.authenticationService.tokenData();
    // print(tokenData)
    this.tokenData = tokenData

    // console.log( this.tokenData)
    return tokenData

  }

}
