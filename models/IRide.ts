import { IPath } from './IPath';
import { IRoute } from './IRoute';

export interface IRide {
  id?: string;
  path: IPath;
  routes: IRoute[];
}
