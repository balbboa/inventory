import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ModelDTO } from '../models.dto';

@Injectable()
export class ModelsUpdateService {
  constructor(private prisma: PrismaService) {}

  // Atualiza o modelo
  async update(id: string, data: ModelDTO) {
    try {
      const modelExists = await this.prisma.models.findUnique({
        where: {
          id
        }
      });

      if (!modelExists) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Este modelo não existe'
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

    // Atualiza o modelo
    return await this.prisma.models.update({
      data,
      where: {
        id
      }
    });
  }
}
