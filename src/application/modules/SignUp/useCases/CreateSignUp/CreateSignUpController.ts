import { FastifyRequest, FastifyReply } from "fastify";
import { CreateSignUpUseCase } from "./CreateSignUpUseCase";
import { IController } from "infra/shared/protocols/controller";
import { HttpRequest, HttpResponse } from "infra/shared/protocols/http";
import { create } from "infra/shared/httpHelper";

interface ICreateSignUpDTO {
  name: string;
  password: string;
}

export class CreateSignUpController implements IController {
  constructor(private readonly useCase: CreateSignUpUseCase) {}

  async handle(request:HttpRequest): Promise<HttpResponse> {
    const { name, password } = request.body as ICreateSignUpDTO;

    const data = { name, password };
    const useCase = await this.useCase.execute(data);

    return create(useCase);
  }
}
