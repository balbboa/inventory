import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ItemDTO } from '../items.dto';

@Injectable()
export class ItemsCreateService {
  constructor(private prisma: PrismaService) {}

  // Cria um novo item
  async create(data: ItemDTO) {
    try {
      const itemExists = await this.prisma.item.findFirst({
        where: {
          serialNumber: data.serialNumber
        }
      });
      if (itemExists) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Este item já existe'
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

    const item = await this.prisma.item.create({
      data
    });

    return item;
  }
}
