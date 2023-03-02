import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ServiceDemandsDeleteService {
  constructor(private prisma: PrismaService) {}

  async delete(id: string) {
    const serviceDemand = await this.prisma.serviceDemand.delete({
      where: { id }
    });

    if (!serviceDemand) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Este serviceDemand não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return serviceDemand;
  }
}
