import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../shared-library/services/authentication.service";
import { User } from "../shared-library/models/user.model";
import { map } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";

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
      username: ['ivan.kukic@gmail.com', [Validators.required]],
      password: ['akoivoandric', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  login() {
    const payload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value,
    };

    this.authenticationService.login(payload.username, payload.password).subscribe((result: any) => {
      // console.log("result", result)
      if (result && result.access_token) {
        this.authenticationService.setToken(result.access_token);
        // console.log("Access token stored success", {payload: this.authenticationService.tokenData});
        this.router.navigate(['/member-profile']);
      } else {
        console.log("access token Failure", {payload: result});
      }
    })
  }

  register() {
    console.log("Register Component")
  }

  forgotPassword() {
    console.log("Forgot Password")
  }

  // chezaLogin(payload: any) {
  //   console.log("cheza login payload:", payload)
  //
  //   this._authenticationService.login(payload.username, payload.password).pipe(
  //     map((user: User) => {
  //       console.log("cheza login user:", user)
  //       // if (user && user.token) {
  //       //   this._authenticationService.token = user && user.token;
  //       //   console.log("loginSuccess", {payload: user});
  //       // } else {
  //       //   console.log("loginFailure", {payload: user});
  //       // }
  //     })
  //   ).subscribe()
  // }

  // chezaGetUser() {
  //   this._authenticationService.getUser().pipe(
  //     map((user: User) => console.log(user)),
  //   )
  // }

}
