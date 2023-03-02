import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ItemsFindAllService {
  constructor(private prisma: PrismaService) {}

  // Lista todos os items
  async findAll() {
    const items = await this.prisma.item.findMany({
      orderBy: { id: 'desc' }
    });
    return {
      count: items.length,
      items: items
    };
  }
}
