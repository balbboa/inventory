import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ServiceTypeDTO } from '../serviceTypes.dto';

@Injectable()
export class ServiceTypesCreateService {
  constructor(private prisma: PrismaService) {}

  // Cria um novo fabricante
  async create(data: ServiceTypeDTO) {
    try {
      const serviceTypeExists = await this.prisma.serviceType.findFirst({
        where: {
          name: data.name
        }
      });
      if (serviceTypeExists) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Este tipo de servico ja existe'
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

    const serviceType = await this.prisma.serviceType.create({
      data
    });

    return serviceType;
  }
}
