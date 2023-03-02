import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { GroupDTO } from '../groups.dto';

@Injectable()
export class GroupsUpdateService {
  constructor(private prisma: PrismaService) {}

  // Atualiza o grupo
  async update(id: string, data: GroupDTO) {
    try {
      const groupExists = await this.prisma.group.findUnique({
        where: {
          id
        }
      });

      if (!groupExists) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Este grupo não existe'
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

    // Atualiza o groupo
    return await this.prisma.group.update({
      data,
      where: {
        id
      }
    });
  }
}
