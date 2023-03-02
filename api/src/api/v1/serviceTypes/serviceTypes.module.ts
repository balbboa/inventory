import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ServiceTypeController } from './serviceTypes.controller';
import { ServiceTypesDeleteService } from './services/serviceType.delete.service';
import { ServiceTypesFindAllService } from './services/serviceType.findAll.service';
import { ServiceTypesFindOneService } from './services/serviceType.findOne.service';
import { ServiceTypesUpdateService } from './services/serviceType.update.service';
import { ServiceTypesCreateService } from './services/serviceType.create.service';

@Module({
  controllers: [ServiceTypeController],
  providers: [
    PrismaService,
    ServiceTypesCreateService,
    ServiceTypesDeleteService,
    ServiceTypesFindAllService,
    ServiceTypesFindOneService,
    ServiceTypesDeleteService,
    ServiceTypesUpdateService
  ]
})
export class ServiceTypesModule {}
