import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { StatusController } from './status.controller';
import { StatusFindAllService } from './services/status.findAll.service';
import { StatusFindOneService } from './services/status.findOne.service';
import { StatusCreateService } from './services/status.create.service';

@Module({
  controllers: [StatusController],
  providers: [
    PrismaService,
    StatusFindAllService,
    StatusFindOneService,
    StatusCreateService
  ]
})
export class StatusModule {}
