import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { SupplierDTO } from '../suppliers.dto';

@Injectable()
export class SuppliersCreateService {
  constructor(private prisma: PrismaService) {}

  // Cria um novo fornecedor
  async create(data: SupplierDTO) {
    try {
      const supplierExists = await this.prisma.supplier.findFirst({
        where: {
          name: data.name
        }
      });
      if (supplierExists) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Este fornecedor ja existe'
          },
          HttpStatus.FORBIDDEN
        );
      }
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    const supplier = await this.prisma.supplier.create({
      data
    });

    return supplier;
  }
}
