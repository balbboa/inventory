import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ServiceDTO } from '../services.dto';

@Injectable()
export class ServicesUpdateService {
  constructor(private prisma: PrismaService) {}

  // Atualiza o servico
  async update(id: string, data: ServiceDTO) {
    try {
      const serviceExists = await this.prisma.service.findUnique({
        where: {
          id
        }
      });

      if (!serviceExists) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Este servico não existe'
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

    // Atualiza o servico
    return await this.prisma.service.update({
      data,
      where: {
        id
      }
    });
  }
}
