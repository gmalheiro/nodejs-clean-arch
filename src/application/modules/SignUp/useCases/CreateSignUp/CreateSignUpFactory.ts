import { UserRepository } from "../../repository/UserRepository";
import { CreateSignUpController } from "./CreateSignUpController";
import { CreateSignUpUseCase } from "./CreateSignUpUseCase";

export const CreateSignUpFactory = (): CreateSignUpController =>{
    const repository = new UserRepository();
    const useCase = new CreateSignUpUseCase(repository);
    const controller = new CreateSignUpController(useCase);

    return controller;
};