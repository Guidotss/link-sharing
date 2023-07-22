
import { Links, PrismaClient } from "@prisma/client";

export class LinkService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async createLink(userId: string,link: Links[]) { 
    console.log(link); 
    try {
      this.prisma.$connect();
      const result = await this.prisma.links.createMany({
        data: link.map((link) => ({ ...link, userId })),
      });
      this.prisma.$disconnect();
      return result;
      
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
