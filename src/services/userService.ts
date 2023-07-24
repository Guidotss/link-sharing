import { User } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import brcryp from "bcrypt";

export class UserService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  private async hashPassword(password: string) {
    try {
      const hash = await brcryp.hash(password, 10);
      return hash;
    } catch (error) {
      throw new Error("Internal Server Error");
    }
  }

  private async comparePassword(password: string, hash: string) {
    try {
      const result = await brcryp.compare(password, hash);
      return result;
    } catch (error) {
      throw new Error("Internal Server Error");
    }
  }

  async getUserByEmail(email: string) {
    try {
      this.prisma.$connect();
      const user = await this.prisma.user.findUnique({ where: { email } });
      if (!user) return null;
      this.prisma.$disconnect();
      return user;
    } catch (error) {
      console.log(error);
      this.prisma.$disconnect();
      throw new Error(`An error occurred while getting the user: ${error}`);
    }
  }

  async registerUser(user: User) {
    try {
      this.prisma.$connect();
      const userExists = await this.getUserByEmail(user.email);
      if (userExists) {
        this.prisma.$disconnect();
        return null;
      }

      const hash = await this.hashPassword(user.password);
      const newUser = await this.prisma.user.create({
        data: {
          email: user.email,
          password: hash,
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          password: false,
          Links: true,
        },
      });
      this.prisma.$disconnect();
      return newUser;
    } catch (error) {
      throw new Error(`An error occurred while registering the user: ${error}`);
    }
  }

  async loginUser(email: string, password: string) {
    try {
      this.prisma.$connect();
      const user = await this.getUserByEmail(email);
      if (!user) return null;
      const result = await this.comparePassword(password, user.password);
      if (!result) return null;
      this.prisma.$disconnect();
      return user;
    } catch (error) {
      this.prisma.$disconnect();
      throw new Error(`An error occurred while logging in the user: ${error}`);
    }
  }

  async getUserById(id: string) {
    try {
      this.prisma.$connect();
      const user = await this.prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          password: false,
          image: true,
        },
      });
      if (!user) return null;
      this.prisma.$disconnect();
      return user;
    } catch (error) {
      throw new Error(`An error occurred while getting the user: ${error}`);
    }
  }

  async updateUserImage(id: string, image: string) {
    try {
      const userUpdated = await this.prisma.user.update({
        where: { id },
        data: { image },
        select: {
          id: false,
          email: false,
          firstName: false,
          lastName: false,
          image: true,
          Links: false,
          password: false,
        },
      });
      return userUpdated;
    } catch (error) {
      console.log(error);
      throw new Error(
        `An error has ocurred while updating user image: ${error}`
      );
    }
  }

  async updateUser(
    id: string,
    firstName: string,
    lastName: string,
    email?: string
  ) {
    try {
      const userUpdated = await this.prisma.user.update({
        where: { id },
        data: { firstName, lastName, email },
        select: {
          id: false,
          email: true,
          firstName: true,
          lastName: true,
          image: false,
          Links: false,
          password: false,
        },
      });

      return userUpdated;
    } catch (error) {
      console.log(error);
      throw new Error(`An error has ocurred while updating the user ${error}`);
    }
  }
}
