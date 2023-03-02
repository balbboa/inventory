import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class SuppliersFindAllService {
  constructor(private prisma: PrismaService) {}

  // Lista todos os fabricantes
  async findAll() {
    const suppliers = await this.prisma.supplier.findMany({
      orderBy: { id: 'desc' }
    });
    return {
      count: suppliers.length,
      suppliers: suppliers
    };
  }
}
