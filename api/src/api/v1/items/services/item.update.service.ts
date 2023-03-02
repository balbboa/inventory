import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ItemDTO } from '../items.dto';

@Injectable()
export class ItemsUpdateService {
  constructor(private prisma: PrismaService) {}

  // Atualiza o item
  async update(id: string, data: ItemDTO) {
    try {
      const itemExists = await this.prisma.item.findUnique({
        where: {
          id
        }
      });

      if (!itemExists) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Este item não existe'
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

    // Atualiza o itemo
    return await this.prisma.item.update({
      data,
      where: {
        id
      }
    });
  }
}
