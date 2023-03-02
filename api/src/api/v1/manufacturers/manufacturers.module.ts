import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ManufacturerController } from './manufacturers.controller';
import { ManufacturersDeleteService } from './services/manufacturer.delete.service';
import { ManufacturersFindAllService } from './services/manufacturer.findAll.service';
import { ManufacturersFindOneService } from './services/manufacturer.findOne.service';
import { ManufacturersUpdateService } from './services/manufacturer.update.service';
import { ManufacturersCreateService } from './services/manufacturer.create.service';

@Module({
  controllers: [ManufacturerController],
  providers: [
    PrismaService,
    ManufacturersCreateService,
    ManufacturersDeleteService,
    ManufacturersFindAllService,
    ManufacturersFindOneService,
    ManufacturersDeleteService,
    ManufacturersUpdateService
  ]
})
export class ManufacturersModule {}
