import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class StatusFindAllService {
  constructor(private prisma: PrismaService) {}

  // Lista todos os Status
  async findAll() {
    const status = await this.prisma.status.findMany({
      orderBy: { id: 'desc' }
    });
    return {
      count: status.length,
      status: status
    };
  }
}
