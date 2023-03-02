import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class SuppliersFindOneService {
  constructor(private prisma: PrismaService) {}

  // Obtem um fornecedor
  async findOne(id: string) {
    const supplier = await this.prisma.supplier.findUnique({
      where: {
        id: id
      }
    });

    if (!supplier) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Este fornecedor não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return supplier;
  }
}
