import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ItemDemandDTO } from '../itemDemands.dto';

@Injectable()
export class ItemDemandsCreateService {
  constructor(private prisma: PrismaService) {}

  // Cria um novo itemDemand
  async create(data: ItemDemandDTO) {
    try {
      const itemDemandExists = await this.prisma.itemDemand.findFirst({
        where: {
          justify: data.justify
        }
      });
      if (itemDemandExists) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Esta demanda já existe'
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

    const itemDemand = await this.prisma.itemDemand.create({
      data
    });

    return itemDemand;
  }
}
