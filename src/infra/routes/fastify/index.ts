import fastify, { FastifyPluginAsync } from "fastify";
import { CreateSignUpFactory } from "application/modules/SignUp/useCases/CreateSignUp/CreateSignUpFactory";

export const signUpRouter: FastifyPluginAsync = async (
    fastify
  ): Promise<void> => {
    fastify.post('/signup', (req, res) => CreateSignUpFactory().handle(req, res))
  }