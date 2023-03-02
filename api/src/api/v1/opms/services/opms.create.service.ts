import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { OpmDTO } from '../opms.dto';

@Injectable()
export class OpmsCreateService {
  constructor(private prisma: PrismaService) {}

  // Cria uma nova opm
  async create(data: OpmDTO) {
    try {
      const opmExists = await this.prisma.opms.findFirst({
        where: {
          name: data.name,
          acronym: data.acronym
        }
      });
      if (opmExists) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Esta opm ja existe'
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

    const opm = await this.prisma.opms.create({
      data
    });

    return opm;
  }
}
