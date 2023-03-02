import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ServicesDeleteService {
  constructor(private prisma: PrismaService) {}

  async delete(id: string) {
    const service = await this.prisma.service.delete({
      where: { id }
    });

    if (!service) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Este servico não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return service;
  }
}
