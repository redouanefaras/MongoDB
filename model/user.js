import {Schema, model} from "mongoose";

const MODEL_NAME="user";
const schema = new Schema({
    name: {type: Schema.Types.String, required:true, default:"no user name"},
    email: {type: Schema.Types.String, required:true},
    password: {type: Schema.Types.String, required:true},
});

export default model(MODEL_NAME, schema);
