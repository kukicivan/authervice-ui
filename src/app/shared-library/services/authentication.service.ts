import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { first, map } from "rxjs/operators";


import jwt_decode from "jwt-decode";
import { environment } from "../../../environments/environment";

import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  api = environment.api;

  private _isLoggedIn = false;

  constructor(private _http: HttpClient) {
  }

  setToken(accessToken: string): void {
    localStorage.setItem('access_token', accessToken);
    this.isLoggedIn = true;
  }

  removeToken(): void {
    localStorage.removeItem('access_token');
    this.isLoggedIn = false;
  }

  get token(): string | null {
    return localStorage.getItem('access_token');
  }

  get tokenData(): any | null {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      const decoded = jwt_decode(access_token);
      return decoded;
    }

    return null
  }

  // Resolves performance issue for calling methods from Angular template
  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  public logOut(): void {
    this.removeToken();
    console.log("You have been logged out of the system.")
  }

  // @Alerts({showOnsuccess: true, successText: SuccessResponses.LOGIN_SUCCESS})
  login(username: string, password: string): Observable<User> {

    // Backend expect to receive "username" and "password" as form-data parameters
    const headers = new Headers({'enctype': 'multipart/form-data'});
    // headers.append('Accept', 'application/json');
    // const options = new RequestOptions();
    const formData: FormData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this._http
      .post(`${this.api}/auth/login`, formData)
      .pipe(map((data: any) => data));
  }

  // @Alerts({ showOnsuccess: true, successText: SuccessResponses.LOGOUT_SUCCESS })
  logout(): Observable<boolean> {
    // TODO: Call api to clear the httponly cookie
    // this.removeToken();

    return of(true).pipe(first());
  }

  // @Alerts()
  getUserProfile(id: any): Observable<User> {
    return this._http.get(`${this.api}/users/me`).pipe(
      map((data: any) => {
        return new User(data);
      })
    );
  }

}
