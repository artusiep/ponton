import { IPath } from './iPath';
import { IRoute } from './iRoute';

export interface IRide {
  id?: string;
  path: IPath;
  routes: IRoute[];
}
