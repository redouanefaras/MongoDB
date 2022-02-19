import User from "../model/user.js";

export const creatUser = (req, res, next)=>{
    const userInfo={
name :"redouane",
email:"redouanefaras@gmail.com",
password:"1234",
    };

    const user = new User(userInfo);

    user.save()
    .then(()=>{console.log("User Created");})
    .catch(()=>{console.log("Something went wrong");});

};
