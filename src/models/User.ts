import { Schema, model } from "mongoose";

interface User {
    email: string,
    password: string,
    username: string
}


const UserSchema = new Schema<User>({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    username: {
        type: String,
        unique: true
    }
});


export default model<User>("User", UserSchema);