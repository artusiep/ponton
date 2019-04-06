import { Injectable } from '@nestjs/common';
import { User } from '../../../models/user';
import { IRoute } from 'express';
import { PythagorasService } from "./pythagoras.service";

@Injectable()
export class MatcherService {
    constructor(private readonly pythagorasService: PythagorasService) {}

  getBestMatches(routes: [IRoute]) {}

    test(route: IRoute) {

    }
}

export interface RouteDistance {
  user: User;
  distance: number;
}
