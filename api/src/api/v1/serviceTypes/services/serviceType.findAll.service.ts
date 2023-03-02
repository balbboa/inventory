import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ServiceTypesFindAllService {
  constructor(private prisma: PrismaService) {}

  // Lista todos os fabricantes
  async findAll() {
    const serviceTypes = await this.prisma.serviceType.findMany({
      orderBy: { id: 'desc' }
    });
    return {
      count: serviceTypes.length,
      serviceTypes: serviceTypes
    };
  }
}
