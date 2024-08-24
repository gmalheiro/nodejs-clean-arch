import { FastifyPluginAsync } from "fastify";
import { CreateSignUpFactory } from "application/modules/SignUp/useCases/CreateSignUp/CreateSignUpFactory";
import { adapterRouteFastify } from "infra/adapter/adapterRouteFastify";

export const signUpRouter: FastifyPluginAsync = async (
  fastify
): Promise<void> => {
  fastify.post("/signup", adapterRouteFastify(CreateSignUpFactory()));
};
