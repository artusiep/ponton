import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { UserController } from './controllers/user.controller';
import { RideController } from './controllers/ride.controller';
import { RouteController } from './controllers/route.controller';
import { PathController } from './controllers/path.controllers';
import { PreferenceController } from './controllers/preference.controllers';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
    RideController,
    RouteController,
    PathController, 
    PreferenceController
  ],
  providers: [AppService],
})
export class AppModule {}
