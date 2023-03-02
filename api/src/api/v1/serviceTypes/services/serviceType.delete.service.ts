import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ServiceTypesDeleteService {
  constructor(private prisma: PrismaService) {}

  async delete(id: string) {
    const serviceType = await this.prisma.serviceType.delete({
      where: { id }
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
