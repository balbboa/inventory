import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ItemDemandsFindOneService {
  constructor(private prisma: PrismaService) {}

  // Obtem um itemDemand
  async findOne(id: string) {
    const itemDemand = await this.prisma.itemDemand.findUnique({
      where: {
        id: id
      }
    });

    if (!itemDemand) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Esta demanda não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return itemDemand;
  }
}
