import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    avatar: string;
    role: string;
}

const userSchema = new Schema<IUser>(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        avatar: { type: String, required: true },
        role: { type: String, required: true }
    },
    { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
