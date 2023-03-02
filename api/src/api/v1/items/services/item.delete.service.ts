import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ItemsDeleteService {
  constructor(private prisma: PrismaService) {}

  async delete(id: string) {
    const item = await this.prisma.item.delete({
      where: { id }
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
