import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../shared-library/services/authentication.service';
import { User } from '../shared-library/models/user.model';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  // passwordHidden = true;
  // userMenu = UserMenu;
  loadingButton = false;

  constructor(
    private _fb: FormBuilder,
    private _cdr: ChangeDetectorRef,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loginForm = this._fb.group({
      username: ['user@ibuildteam.com', [Validators.required]],
      password: ['akoivoandric', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  login(): void {
    const payload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value,
    };

    this.authenticationService.login(payload.username, payload.password).subscribe((result: any) => {
      if (result && result.access_token) {
        this.authenticationService.setToken(result.access_token);
        this.router.navigate(['/member-profile']);
      } else {
      }
    });
  }

  register(): void {
    console.log('Register Component');
  }

  forgotPassword(): void {
    console.log('Forgot Password');
  }


}
