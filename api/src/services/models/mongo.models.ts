import { Document, Schema } from 'mongoose';
import { IPath } from '../../../../models/iPath';
import { IRide } from '../../../../models/iRide';
import { IRoute } from '../../../../models/iRoute';
import { IUser } from '../../../../models/iUser';

export interface MPath extends Document, IPath {
  id: string;
}

export const UserSchema: Schema = new Schema({});

export interface MRide extends Document, IRide {
}

export interface MRoute extends Document, IRoute {
}

export interface MUser extends Document, IUser {
}
