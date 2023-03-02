import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { GroupDTO } from '../groups.dto';

@Injectable()
export class GroupsCreateService {
  constructor(private prisma: PrismaService) {}

  // Cria um novo grupo
  async create(data: GroupDTO) {
    try {
      const groupExists = await this.prisma.group.findFirst({
        where: {
          name: data.name
        }
      });
      if (groupExists) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Este grupo já existe'
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

    const group = await this.prisma.group.create({
      data
    });

    return group;
  }
}
