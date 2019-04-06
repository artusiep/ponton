import { Injectable } from '@nestjs/common';
import { Coord } from '../../../models/coord';

@Injectable()
export class PythagorasService {
  countDistance(start: Coord, end: Coord) {
    const a = Math.abs(end.lon - start.lon);
    const b = Math.abs(end.lat - start.lat);

    return Math.sqrt(a * a + b * b);
  }
}
