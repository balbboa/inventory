import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ServiceDTO } from '../services.dto';

@Injectable()
export class ServicesCreateService {
  constructor(private prisma: PrismaService) {}

  // Cria um novo imovel
  async create(data: ServiceDTO) {
    try {
      const serviceExists = await this.prisma.service.findFirst({
        where: {
          lineNumber: data.lineNumber
        }
      });
      if (serviceExists) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Este servico já existe'
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

    const service = await this.prisma.service.create({
      data
    });

    return service;
  }
}
