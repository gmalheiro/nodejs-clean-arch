import { Router } from "express";
import { CreateSignUpFactory } from "application/modules/SignUp/useCases/CreateSignUp/CreateSignUpFactory";
const signupRoutes = Router();

signupRoutes.post('/signup',(req,res) => CreateSignUpFactory().handle(req,res));

export { signupRoutes };