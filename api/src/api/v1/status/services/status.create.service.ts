import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { StatusDTO } from '../status.dto';

@Injectable()
export class StatusCreateService {
  constructor(private prisma: PrismaService) {}

  // Cria um novo Status
  async create(data: StatusDTO) {
    try {
      const statusExists = await this.prisma.status.findFirst({
        where: {
          name: data.name
        }
      });
      if (statusExists) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Este Status ja existe'
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

    const status = await this.prisma.status.create({
      data
    });

    return status;
  }
}
