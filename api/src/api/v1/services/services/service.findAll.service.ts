import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ServicesFindAllService {
  constructor(private prisma: PrismaService) {}

  // Lista todos os imoveis
  async findAll() {
    const services = await this.prisma.service.findMany({
      orderBy: { id: 'desc' }
    });
    return {
      count: services.length,
      services: services
    };
  }
}
