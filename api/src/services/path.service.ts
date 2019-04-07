import { Injectable } from '@nestjs/common';
import { IPath } from '../../../models/iPath';
import { Path } from './models/path';

@Injectable()
export class PathService {
  create(path: IPath) {
    const pathModel = new Path(path);
    return pathModel.save();
  }

  findAll() {
    return Path.find({});
  }

  findOne(id: string) {
    return Path.findOne({id});
  }

  update(id: string, ride: IPath) {
    return 'Not implemented';
  }
}
