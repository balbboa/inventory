import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ServiceDemandDTO } from '../serviceDemands.dto';

@Injectable()
export class ServiceDemandsUpdateService {
  constructor(private prisma: PrismaService) {}

  // Atualiza o serviceDemand
  async update(id: string, data: ServiceDemandDTO) {
    try {
      const serviceDemandExists = await this.prisma.serviceDemand.findUnique({
        where: {
          id
        }
      });

      if (!serviceDemandExists) {
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

    // Atualiza o serviceDemando
    return await this.prisma.serviceDemand.update({
      data,
      where: {
        id
      }
    });
  }
}
