import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';

import { IRoute } from '../../../../models/IRoute';

const RouteSchema: Schema = new Schema({
  id: {type: String, required: true},
  user: {type: {}, required: true},
  preferences: {type: Array, required: true},
});

export const Route = mongoose.model<Document & IRoute>('Route', RouteSchema);
