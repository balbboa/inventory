import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ItemDemandsDeleteService {
  constructor(private prisma: PrismaService) {}

  async delete(id: string) {
    const itemDemand = await this.prisma.itemDemand.delete({
      where: { id }
    });

    if (!itemDemand) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Este itemDemand não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return itemDemand;
  }
}
