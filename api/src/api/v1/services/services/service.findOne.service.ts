import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ServicesFindOneService {
  constructor(private prisma: PrismaService) {}

  // Obtem um grupo
  async findOne(id: string) {
    const service = await this.prisma.service.findUnique({
      where: {
        id: id
      }
    });

    if (!service) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Este imovel não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return service;
  }
}
