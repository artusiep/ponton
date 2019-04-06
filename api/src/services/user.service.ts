import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    get(id) {
        return `Get ${id}`;
    }

    getAll() {
        return 'GetAll';
    }

    create(user) {
        return `Create ${user}`;
    }

}
