import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class MongoService {
  constructor() {
    mongoose.connect(`mongodb://localhost:27017`);
  }
}
