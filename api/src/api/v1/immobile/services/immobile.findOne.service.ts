import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ImmobilesFindOneService {
  constructor(private prisma: PrismaService) {}

  // Obtem um grupo
  async findOne(id: string) {
    const immobile = await this.prisma.immobile.findUnique({
      where: {
        id: id
      }
    });

    if (!immobile) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Este imovel não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return immobile;
  }
}
