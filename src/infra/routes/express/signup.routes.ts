import { Router } from "express";
import { CreateSignUpFactory } from "application/modules/SignUp/useCases/CreateSignUp/CreateSignUpFactory";
import { adapterRouteExpress } from "infra/adapter/adapterRouteExpress";
const signupRoutes = Router()

signupRoutes.post('/signup', adapterRouteExpress(CreateSignUpFactory()))

export { signupRoutes }