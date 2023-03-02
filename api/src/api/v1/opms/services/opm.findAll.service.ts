import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class OpmsFindAllService {
  constructor(private prisma: PrismaService) {}

  // Lista todos as opms
  async findAll() {
    const opms = await this.prisma.opms.findMany({
      orderBy: { id: 'desc' }
    });
    return {
      count: opms.length,
      opms: opms
    };
  }
}
