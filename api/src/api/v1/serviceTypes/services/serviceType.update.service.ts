import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ServiceTypeDTO } from '../serviceTypes.dto';

@Injectable()
export class ServiceTypesUpdateService {
  constructor(private prisma: PrismaService) {}

  // Atualiza o fabricante
  async update(id: string, data: ServiceTypeDTO) {
    try {
      const serviceTypeExists = await this.prisma.serviceType.findUnique({
        where: {
          id
        }
      });

      if (!serviceTypeExists) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Este tipo de servico não existe'
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

    // Atualiza o serviceTypeo
    return await this.prisma.serviceType.update({
      data,
      where: {
        id
      }
    });
  }
}
