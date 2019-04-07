import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { IRide } from '../../../../models/iRide';

const RideSchema: Schema = new Schema({
  id: {type: String, required: true},
  path: {type: Object, required: true},
  routes: {type: Array, required: true},
});

export const Ride = mongoose.model<Document & IRide>('Ride', RideSchema);
