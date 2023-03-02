import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ManufacturersDeleteService {
  constructor(private prisma: PrismaService) {}

  async delete(id: string) {
    const manufacturer = await this.prisma.manufacturers.delete({
      where: { id }
    });

    if (!manufacturer) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Este fabricante não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return manufacturer;
  }
}
