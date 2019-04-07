import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { IPreference } from '../../../../models/iPreference';

const PathSchema: Schema = new Schema({
  id: {type: String, required: true},
});

export const Path = mongoose.model<Document & IPreference>('Path', PathSchema);
