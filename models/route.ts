import { Preference } from './preference';
import { User } from './user';

export interface Route {
  id?: string;
  user: User;
  preferences: Preference[];
}
