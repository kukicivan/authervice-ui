import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared-library/services/authentication.service';
import { User } from '../shared-library/models/user.model';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss']
})
export class MemberProfileComponent implements OnInit {
  user: User | undefined;

  constructor(
    private authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit(): void {
    this.getMemberDetails();
  }

  getMemberDetails(): void {
    const userId = this.authenticationService.tokenData.user_id;
    this.authenticationService.getUserProfile(userId).subscribe((user: User) => {
      this.user = user;
    });
  }
}
