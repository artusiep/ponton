import { Injectable } from '@nestjs/common';
import { User } from '../../../models/user';

@Injectable()
export class UserService {
  private users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find(user => id === user.id);
  }

  update(id: string, user: User) {
    const updatedUsers = this.users.map(oldUser =>
      id === oldUser.id ? user : oldUser,
    );

    this.users = updatedUsers;
  }
}
