import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ManufacturerDTO } from '../manufacturers.dto';

@Injectable()
export class ManufacturersUpdateService {
  constructor(private prisma: PrismaService) {}

  // Atualiza o fabricante
  async update(id: string, data: ManufacturerDTO) {
    try {
      const manufacturerExists = await this.prisma.manufacturers.findUnique({
        where: {
          id
        }
      });

      if (!manufacturerExists) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Este fabricante não existe'
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

    // Atualiza o manufacturero
    return await this.prisma.manufacturers.update({
      data,
      where: {
        id
      }
    });
  }
}
