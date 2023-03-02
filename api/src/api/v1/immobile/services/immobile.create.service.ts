import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ImmobileDTO } from '../immobiles.dto';

@Injectable()
export class ImmobilesCreateService {
  constructor(private prisma: PrismaService) {}

  // Cria um novo imovel
  async create(data: ImmobileDTO) {
    try {
      const immobileExists = await this.prisma.immobile.findFirst({
        where: {
          name: data.name
        }
      });
      if (immobileExists) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Este imovel já existe'
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

    const immobile = await this.prisma.immobile.create({
      data
    });

    return immobile;
  }
}
