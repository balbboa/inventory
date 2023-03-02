import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ManufacturersFindOneService {
  constructor(private prisma: PrismaService) {}

  // Obtem um fabricante
  async findOne(id: string) {
    const manufacturer = await this.prisma.manufacturers.findUnique({
      where: {
        id: id
      }
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
