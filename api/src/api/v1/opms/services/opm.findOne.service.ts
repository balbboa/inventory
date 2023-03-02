import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class OpmsFindOneService {
  constructor(private prisma: PrismaService) {}

  // Obtem um opmo
  async findOne(id: string) {
    const opm = await this.prisma.opms.findUnique({
      where: {
        id: id
      }
    });

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
