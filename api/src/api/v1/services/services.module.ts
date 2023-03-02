import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ServiceController } from './services.controller';
import { ServicesDeleteService } from './services/service.delete.service';
import { ServicesFindAllService } from './services/service.findAll.service';
import { ServicesFindOneService } from './services/service.findOne.service';
import { ServicesUpdateService } from './services/service.update.service';
import { ServicesCreateService } from './services/service.create.service';

@Module({
  controllers: [ServiceController],
  providers: [
    PrismaService,
    ServicesCreateService,
    ServicesDeleteService,
    ServicesFindAllService,
    ServicesFindOneService,
    ServicesDeleteService,
    ServicesUpdateService
  ]
})
export class ServicesModule {}
