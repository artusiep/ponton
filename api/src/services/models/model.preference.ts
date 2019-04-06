import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { IPreference } from '../../../../models/iPreference';

const PreferenceSchema: Schema = new Schema({
    kind: {type: String, required: true},
    properties: {type: Object, required: true},
});

export const Preference = mongoose.model<Document & IPreference>('Preference', PreferenceSchema);
