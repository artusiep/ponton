import { Schema } from 'mongoose';

const RouteSchema: Schema = new Schema({
  kind: {type: String, required: true},
  properties: {type: Object, required: true},
});
