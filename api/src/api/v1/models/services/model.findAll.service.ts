import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ModelsFindAllService {
  constructor(private prisma: PrismaService) {}

  // Lista todos os modelos
  async findAll() {
    const models = await this.prisma.models.findMany({
      orderBy: { id: 'desc' }
    });
    return {
      count: models.length,
      models: models
    };
  }
}
