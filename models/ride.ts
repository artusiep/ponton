import { Path } from './path';
import { Route } from './route';

export interface Ride {
  id?: string;
  path: Path;
  routes: Route[];
}
