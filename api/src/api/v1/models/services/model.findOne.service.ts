import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ModelsFindOneService {
  constructor(private prisma: PrismaService) {}

  // Obtem um modelo
  async findOne(id: string) {
    const model = await this.prisma.models.findUnique({
      where: {
        id: id
      }
    });

    if (!model) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Este modelo não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return model;
  }
}
