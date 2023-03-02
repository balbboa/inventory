import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { OpmDTO } from '../opms.dto';

@Injectable()
export class OpmsUpdateService {
  constructor(private prisma: PrismaService) {}

  // Atualiza a opm
  async update(id: string, data: OpmDTO) {
    try {
      const opmExists = await this.prisma.opms.findUnique({
        where: {
          id
        }
      });

      if (!opmExists) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Esta opm não existe'
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

    // Atualiza a opm
    return await this.prisma.opms.update({
      data,
      where: {
        id
      }
    });
  }
}
