import { userModel } from '@/models';
import bcrypt from 'bcrypt';

export class UserService {
    private readonly userModel = userModel;

    constructor(){}; 

    private async hashPassword(password: string) {
        try{
            const hashedPassword = await bcrypt.hash(password, 10);
            return hashedPassword;
        }catch(error){
            throw new Error("Error hashing password");
        }
    }

    private async comparePassword(password: string, hashedPassword: string) {
        try{
            const isMatch = await bcrypt.compare(password, hashedPassword);
            return isMatch;
        }catch(error){
            throw new Error("Error comparing password");
        }
    }

    private async getUserByEmail(email: string) {
        try{
            const user = await this.userModel.findOne({ email });
            return user;
        }catch(error){
            throw new Error("Error getting user by email");
        }
    }

    public async createUser(user: any) {
        try{
            const newUser = await this.userModel.create(user);
            return newUser;
        }catch(error){
            throw new Error("Error creating user");
        }
    }

}; 