import { HttpModule, Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { RideController } from './controllers/ride.controller';
import { RouteController } from './controllers/route.controller';
import { PathController } from './controllers/path.controllers';
import { PreferenceController } from './controllers/preference.controllers';
import { UserService } from './services/user.service';
import { MongoService } from './services/mongo.service';
import { RideService } from './services/ride.service';
import { PathService } from './services/path.service';
import { PreferenceService } from './services/preference.servce';
import { RouteService } from './services/route.service';
import { MatcherService } from './services/matcher.service';
import { PythagorasService } from './services/pythagoras.service';

@Module({
  imports: [HttpModule],
  controllers: [
    UserController,
    RideController,
    RouteController,
    PathController,
    PreferenceController,
  ],
  providers: [UserService, MongoService, RideService, PathService, PreferenceService, RouteService, MatcherService, PythagorasService],
})
export class AppModule {}
