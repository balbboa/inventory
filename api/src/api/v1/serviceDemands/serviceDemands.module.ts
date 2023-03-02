import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ServiceDemandController } from './serviceDemands.controller';
import { ServiceDemandsDeleteService } from './services/serviceDemands.delete.service';
import { ServiceDemandsFindAllService } from './services/serviceDemands.findAll.service';
import { ServiceDemandsFindOneService } from './services/serviceDemands.findOne.service';
import { ServiceDemandsUpdateService } from './services/serviceDemands.update.service';
import { ServiceDemandsCreateService } from './services/serviceDemands.create.service';

@Module({
  controllers: [ServiceDemandController],
  providers: [
    PrismaService,
    ServiceDemandsCreateService,
    ServiceDemandsDeleteService,
    ServiceDemandsFindAllService,
    ServiceDemandsFindOneService,
    ServiceDemandsDeleteService,
    ServiceDemandsUpdateService
  ]
})
export class ServiceDemandsModule {}
