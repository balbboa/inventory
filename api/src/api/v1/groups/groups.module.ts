import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { GroupController } from './groups.controller';
import { GroupsDeleteService } from './services/group.delete.service';
import { GroupsFindAllService } from './services/group.findAll.service';
import { GroupsFindOneService } from './services/group.findOne.service';
import { GroupsUpdateService } from './services/group.update.service';
import { GroupsCreateService } from './services/group.create.service';

@Module({
  controllers: [GroupController],
  providers: [
    PrismaService,
    GroupsCreateService,
    GroupsDeleteService,
    GroupsFindAllService,
    GroupsFindOneService,
    GroupsDeleteService,
    GroupsUpdateService
  ]
})
export class GroupsModule {}
