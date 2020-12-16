import { DatePipe } from "@angular/common";

const DATE_FORMAT = 'dd.MM.yyyy HH:mm:ss';

export class User {
  id: number;
  username: string;
  email: string;
  last_login: string | null;
  first_name: string;
  last_name: string;
  is_superuser: boolean;
  is_staff: boolean;
  is_active: string;
  date_joined: string | null;

  constructor(user: IUser,) {
    const datePipe: DatePipe = new DatePipe('en-US');

    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.last_login = datePipe.transform(user.last_login, DATE_FORMAT);
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.is_superuser = user.is_superuser;
    this.is_staff = user.is_staff;
    this.is_active = user.is_active;
    this.date_joined = datePipe.transform(user.date_joined, DATE_FORMAT);
  }
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  last_login: string | null;
  first_name: string;
  last_name: string;
  is_superuser: boolean;
  is_staff: boolean;
  is_active: string;
  date_joined: string;
}
