import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ManufacturersFindAllService {
  constructor(private prisma: PrismaService) {}

  // Lista todos os fabricantes
  async findAll() {
    const manufacturers = await this.prisma.manufacturers.findMany({
      orderBy: { id: 'desc' }
    });
    return {
      count: manufacturers.length,
      manufacturers: manufacturers
    };
  }
}
