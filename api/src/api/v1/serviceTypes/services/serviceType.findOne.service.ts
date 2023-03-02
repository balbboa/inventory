import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ServiceTypesFindOneService {
  constructor(private prisma: PrismaService) {}

  // Obtem um fabricante
  async findOne(id: string) {
    const serviceType = await this.prisma.serviceType.findUnique({
      where: {
        id: id
      }
    });

    if (!serviceType) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Este tipo de servico não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return serviceType;
  }
}
