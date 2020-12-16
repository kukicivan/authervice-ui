import { User } from '@cheza/models/user.model';

export interface IUserState {
  isAuthenticated: boolean;
  details: User;
  loading: boolean;
}
