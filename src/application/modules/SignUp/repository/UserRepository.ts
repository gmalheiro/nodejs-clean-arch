import { User } from '../entity/User';

export class UserRepository {
    public users: User[] = [];

    async create(data: User): Promise<void>{
        this.users.push(data);
    }
}