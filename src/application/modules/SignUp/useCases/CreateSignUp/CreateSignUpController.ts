import { FastifyRequest, FastifyReply } from "fastify";
import { CreateSignUpUseCase } from "./CreateSignUpUseCase";

interface ICreateSignUpDTO {
  name: string;
  password: string;
}

export class CreateSignUpController {
  constructor(private readonly useCase: CreateSignUpUseCase) {}

  async handle(req: FastifyRequest, res: FastifyReply): Promise<Response> {
    const { name, password } = req.body as ICreateSignUpDTO;

    const data = { name, password };
    await this.useCase.execute(data);

    return res.status(201).send({ message: "User created successfully" });
  }
}
