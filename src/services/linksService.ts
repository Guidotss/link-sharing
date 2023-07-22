
import { Links, PrismaClient } from "@prisma/client";

export class LinkService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async createLink(userId: string,link: Links) {
    try {
      this.prisma.$connect();
      const newLink = await this.prisma.links.create({
        data: { 
          ...link,
          userId
        }
      });
      this.prisma.$disconnect();
      return newLink;
    } catch (error) {
      this.prisma.$disconnect();
      throw new Error(`An error occurred while creating the link: ${error}`);
    }
  }

  async getLinksByUserId(userId: string) {
    try {
      this.prisma.$connect();
      const links = await this.prisma.links.findMany({ where: { userId } });
      this.prisma.$disconnect();
      return links;
    } catch (error) {
      this.prisma.$disconnect();
      throw new Error(`An error occurred while getting the links: ${error}`);
    }
  }
}
