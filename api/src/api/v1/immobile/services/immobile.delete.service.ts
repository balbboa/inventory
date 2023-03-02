import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ImmobilesDeleteService {
  constructor(private prisma: PrismaService) {}

  async delete(id: string) {
    const immobile = await this.prisma.immobile.delete({
      where: { id }
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
