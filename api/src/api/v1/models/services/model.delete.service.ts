import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ModelsDeleteService {
  constructor(private prisma: PrismaService) {}

  async delete(id: string) {
    const model = await this.prisma.models.delete({ where: { id } });

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
