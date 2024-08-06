import { User } from "../../entity/User";
import { UserRepository } from "../../repository/UserRepository";

interface IRequest {
    name:string;
    password:string;
}

export class CreateSignUpUseCase {
    constructor(private repository:UserRepository){}

    async execute (request: IRequest): Promise<void> {
        const { name, password } = request;

        const user = new User ({
            name,
            password
        });

        await this.repository.create(user);
    }
}