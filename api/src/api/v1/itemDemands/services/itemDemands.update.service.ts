import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ItemDemandDTO } from '../itemDemands.dto';

@Injectable()
export class ItemDemandsUpdateService {
  constructor(private prisma: PrismaService) {}

  // Atualiza o itemDemand
  async update(id: string, data: ItemDemandDTO) {
    try {
      const itemDemandExists = await this.prisma.itemDemand.findUnique({
        where: {
          id
        }
      });

      if (!itemDemandExists) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Esta demanda não existe'
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

    // Atualiza o itemDemando
    return await this.prisma.itemDemand.update({
      data,
      where: {
        id
      }
    });
  }
}
