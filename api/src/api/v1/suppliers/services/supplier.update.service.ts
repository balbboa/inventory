import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { SupplierDTO } from '../suppliers.dto';

@Injectable()
export class SuppliersUpdateService {
  constructor(private prisma: PrismaService) {}

  // Atualiza o fornecedor
  async update(id: string, data: SupplierDTO) {
    try {
      const supplierExists = await this.prisma.supplier.findUnique({
        where: {
          id
        }
      });

      if (!supplierExists) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Este fornecedor não existe'
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

    // Atualiza o suppliero
    return await this.prisma.supplier.update({
      data,
      where: {
        id
      }
    });
  }
}
