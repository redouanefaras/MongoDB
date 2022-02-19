import { Router } from "express";
import { creatUser } from "../controller/user.js";

const userRouter = Router();

userRouter.post("/register", creatUser);

export default userRouter;