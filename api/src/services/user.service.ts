import { Injectable } from '@nestjs/common';
import { IUser } from '../../../models/iUser';
import { User } from './models/user';

@Injectable()
export class UserService {

  create(user: IUser) {
    const userModel = new User(user);
    return userModel.save();
  }

  findAll() {
    return User.find({});
  }

  findOne(id: string) {
    return User.findOne({id});

  }

  update(id: string, user: IUser) {
    return 'Not implemented';
  }
}
