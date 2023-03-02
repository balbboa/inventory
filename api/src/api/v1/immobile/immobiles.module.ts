import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ImmobileController } from './immobiles.controller';
import { ImmobilesDeleteService } from './services/immobile.delete.service';
import { ImmobilesFindAllService } from './services/immobile.findAll.service';
import { ImmobilesFindOneService } from './services/immobile.findOne.service';
import { ImmobilesUpdateService } from './services/immobile.update.service';
import { ImmobilesCreateService } from './services/immobile.create.service';

@Module({
  controllers: [ImmobileController],
  providers: [
    PrismaService,
    ImmobilesCreateService,
    ImmobilesDeleteService,
    ImmobilesFindAllService,
    ImmobilesFindOneService,
    ImmobilesDeleteService,
    ImmobilesUpdateService
  ]
})
export class ImmobilesModule {}
