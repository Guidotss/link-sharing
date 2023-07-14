import { User } from "@/interfaces";
import { PrismaClient } from "@prisma/client";





export class UserService {
    private prisma: PrismaClient;
    constructor(){
        this.prisma = new PrismaClient();
    }

    async RegisterUser(user: User): Promise<User> {}

}