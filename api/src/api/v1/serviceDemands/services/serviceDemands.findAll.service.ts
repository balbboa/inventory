import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ServiceDemandsFindAllService {
  constructor(private prisma: PrismaService) {}

  // Lista todos os serviceDemands
  async findAll() {
    const serviceDemands = await this.prisma.serviceDemand.findMany({
      orderBy: { id: 'desc' }
    });
    return {
      count: serviceDemands.length,
      serviceDemands: serviceDemands
    };
  }
}
