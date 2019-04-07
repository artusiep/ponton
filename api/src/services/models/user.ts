import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { IPreference } from '../../../../models/iPreference';

const UserSchema: Schema = new Schema({
  id: {type: String, required: true},
});

export const User = mongoose.model<Document & IPreference>('User', UserSchema);
