import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ImmobilesFindAllService {
  constructor(private prisma: PrismaService) {}

  // Lista todos os imoveis
  async findAll() {
    const immobiles = await this.prisma.immobile.findMany({
      orderBy: { id: 'desc' }
    });
    return {
      count: immobiles.length,
      immobiles: immobiles
    };
  }
}
