import { Injectable } from '@nestjs/common';
import { IUser } from '../../../models/iUser';

@Injectable()
export class UserService {
  private users: IUser[] = [];

  create(user: IUser) {
    this.users.push(user);
  }

  findAll(): IUser[] {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find(user => id === user.id);
  }

  update(id: string, user: IUser) {
    const updatedUsers = this.users.map(oldUser =>
      id === oldUser.id ? user : oldUser,
    );

    this.users = updatedUsers;
  }
}
