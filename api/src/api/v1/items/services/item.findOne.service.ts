import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ItemsFindOneService {
  constructor(private prisma: PrismaService) {}

  // Obtem um item
  async findOne(id: string) {
    const item = await this.prisma.item.findUnique({
      where: {
        id: id
      }
    });

    if (!item) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Este item não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return item;
  }
}
