import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class GroupsDeleteService {
  constructor(private prisma: PrismaService) {}

  async delete(id: string) {
    const group = await this.prisma.group.delete({
      where: { id }
    });

    if (!group) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Este grupo não existe'
        },
        HttpStatus.NOT_FOUND
      );
    }

    return group;
  }
}
