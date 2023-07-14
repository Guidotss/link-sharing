import mongoose, { model, Model, Schema } from "mongoose"; 


interface IUser extends mongoose.Document {
    email: string, 
    password: string,
}

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    links:[{
        name: String,
        url: String,
        platform: String,
    }]
}); 


export const userModel: Model<IUser> = mongoose.models.User || model("User", UserSchema);