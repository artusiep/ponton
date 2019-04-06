import { IPreference } from './IPreference';
import { IUser } from './IUser';

export interface IRoute {
  user: IUser;
  preferences: IPreference[];
}
