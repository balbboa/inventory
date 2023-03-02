import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ItemDemandsFindAllService {
  constructor(private prisma: PrismaService) {}

  // Lista todos os itemDemands
  async findAll() {
    const itemDemands = await this.prisma.itemDemand.findMany({
      orderBy: { id: 'desc' }
    });
    return {
      count: itemDemands.length,
      itemDemands: itemDemands
    };
  }
}
