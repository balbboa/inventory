import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ImmobileDTO } from '../immobiles.dto';

@Injectable()
export class ImmobilesUpdateService {
  constructor(private prisma: PrismaService) {}

  // Atualiza o imovel
  async update(id: string, data: ImmobileDTO) {
    try {
      const immobileExists = await this.prisma.immobile.findUnique({
        where: {
          id
        }
      });

      if (!immobileExists) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Este imovel não existe'
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

    // Atualiza o imovel
    return await this.prisma.immobile.update({
      data,
      where: {
        id
      }
    });
  }
}
