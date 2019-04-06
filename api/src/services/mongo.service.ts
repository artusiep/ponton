import { Injectable } from '@nestjs/common';

let url: string = 'mongodb://localhost:27017';

@Injectable()
export class MongoService {
    get(id ) {
        return 'Get';
    }

    getAll() {
        return 'GetAll';
    }

    create(user) {
        return 'Create';
    }

}
