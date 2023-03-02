import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ManufacturerDTO } from '../manufacturers.dto';

@Injectable()
export class ManufacturersCreateService {
  constructor(private prisma: PrismaService) {}

  // Cria um novo fabricante
  async create(data: ManufacturerDTO) {
    try {
      const manufacturerExists = await this.prisma.manufacturers.findFirst({
        where: {
          name: data.name
        }
      });
      if (manufacturerExists) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Este fabricante ja existe'
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

    const manufacturer = await this.prisma.manufacturers.create({
      data
    });

    return manufacturer;
  }
}
