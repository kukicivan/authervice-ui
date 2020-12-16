import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../shared-library/services/authentication.service";
import { User } from "../shared-library/models/user.model";

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss']
})
export class MemberProfileComponent implements OnInit {
  user: User | undefined;

  constructor(
    private _authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.getMemberDetails();
  }

  getMemberDetails() {
    const userId = this._authenticationService.tokenData.user_id;
    this._authenticationService.getUserProfile(userId).subscribe((user: User) => {
      this.user = user;
    });
  }
}
