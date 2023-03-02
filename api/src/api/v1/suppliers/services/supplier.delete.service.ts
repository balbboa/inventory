import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class SuppliersDeleteService {
  constructor(private prisma: PrismaService) {}

  async delete(id: string) {
    const supplier = await this.prisma.supplier.delete({
      where: { id }
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
