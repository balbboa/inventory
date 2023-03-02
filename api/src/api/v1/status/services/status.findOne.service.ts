import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class StatusFindOneService {
  constructor(private prisma: PrismaService) {}

  // Obtem um status
  async findOne(id: string) {
    const manufacturer = await this.prisma.status.findUnique({
      where: {
        id: id
      }
    });

    if (!manufacturer) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Este status não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return manufacturer;
  }
}
