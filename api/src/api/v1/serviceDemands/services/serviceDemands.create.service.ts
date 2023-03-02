import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ServiceDemandDTO } from '../serviceDemands.dto';

@Injectable()
export class ServiceDemandsCreateService {
  constructor(private prisma: PrismaService) {}

  // Cria um novo serviceDemand
  async create(data: ServiceDemandDTO) {
    try {
      const serviceDemandExists = await this.prisma.serviceDemand.findFirst({
        where: {
          justify: data.justify
        }
      });
      if (serviceDemandExists) {
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

    const serviceDemand = await this.prisma.serviceDemand.create({
      data
    });

    return serviceDemand;
  }
}
