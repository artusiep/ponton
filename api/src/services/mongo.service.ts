import { Injectable } from '@nestjs/common';
import { IRoute } from '../../../models/iRoute';
import { IPath } from '../../../models/iPath';
import { IRide } from '../../../models/iRide';
import { IPreference } from '../../../models/iPreference';
import { IUser } from '../../../models/iUser';

@Injectable()
export class MongoService {
    routeContainer: IRoute [];
    pathContainer: IPath [];
    rideContainer: IRide [];
    preferenceContainer: IPreference[];
    userContainer: IUser[];
    db = {
        route: [],
        path: [],
        ride: [],
        preference: [],
        user: [],
    };
    url = 'mongodb://127.0.0.1:27017';
    dbName = 'ponton';

    get(collectionName, id) {
        return null;
    }

    getAll(collectionName) {
        return null;
    }

    create(collectionName, docs) {
        return null;
    }

}
