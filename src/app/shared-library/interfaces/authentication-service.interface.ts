import { IUser } from '@cheza/models/user.model';
import { Observable } from 'rxjs';

export interface IAuthenticationService {
  login(phoneNumber: string, password: string): Observable<IUser>;
  logout(): void;
}
