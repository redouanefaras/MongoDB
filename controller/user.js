import User from "../model/user.js";
import bcrypt from "bcryptjs";

export const creatUser = (req, res, next)=>{
    const userInfo=req.body;

bcrypt.hash(userInfo.password)
.then()
.catch();
    const user = new User(userInfo);

    user.save()
    .then(()=>{console.log("User Created");})
    .catch(()=>{console.log("Something went wrong");});

};
