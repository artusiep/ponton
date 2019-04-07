import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { RideController } from './controllers/ride.controller';
import { RouteController } from './controllers/route.controller';
import { PathController } from './controllers/path.controllers';
import { PreferenceController } from './controllers/preference.controllers';
import { UserService } from './services/user.service';
import { MongoService } from './services/mongo.service';
import { MatcherService } from './services/matcher.service';
import { PythagorasService } from './services/pythagoras.service';

@Module({
  imports: [],
  controllers: [
    UserController,
    RideController,
    RouteController,
    PathController,
    PreferenceController,
  ],
  providers: [UserService, MongoService, MatcherService, PythagorasService],
})
export class AppModule {}
