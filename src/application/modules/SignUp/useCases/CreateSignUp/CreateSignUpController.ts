import { Response, Request } from "express";
import { CreateSignUpUseCase } from "./CreateSignUpUseCase";

interface ICreateSignUpDTO {
    name: string;
    password: string;
}

export class CreateSignUpController{
    constructor(private readonly useCase: CreateSignUpUseCase){}
    
    async handle(req: Request, res: Response): Promise <Response> {
        const { name,password } = req.body as ICreateSignUpDTO;

        const data = { name, password };

        await this.useCase.execute(data);

        return res.status(201).send({ message: 'User created sucessfully' });
    }
}