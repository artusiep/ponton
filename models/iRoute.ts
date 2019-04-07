import { IPreference } from './iPreference';
import { IUser } from './iUser';

export interface IRoute {
  id?: string;
  user: IUser;
  preferences: IPreference[];
}
