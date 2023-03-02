import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class OpmsDeleteService {
  constructor(private prisma: PrismaService) {}

  async delete(id: string) {
    const opm = await this.prisma.opms.delete({ where: { id } });

    if (!opm) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Esta opm não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return opm;
  }
}
