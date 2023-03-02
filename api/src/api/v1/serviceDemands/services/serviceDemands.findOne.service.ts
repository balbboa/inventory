import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ServiceDemandsFindOneService {
  constructor(private prisma: PrismaService) {}

  // Obtem um serviceDemand
  async findOne(id: string) {
    const serviceDemand = await this.prisma.serviceDemand.findUnique({
      where: {
        id: id
      }
    });

    if (!serviceDemand) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Esta demanda não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return serviceDemand;
  }
}
