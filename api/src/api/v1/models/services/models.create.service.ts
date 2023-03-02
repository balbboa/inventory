import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ModelDTO } from '../models.dto';

@Injectable()
export class ModelsCreateService {
  constructor(private prisma: PrismaService) {}

  // Cria um novo modelo
  async create(data: ModelDTO) {
    try {
      const modelExists = await this.prisma.models.findFirst({
        where: {
          name: data.name
        }
      });
      if (modelExists) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Este modelo ja existe'
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

    const model = await this.prisma.models.create({
      data
    });

    return model;
  }
}
