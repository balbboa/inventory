import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ModelController } from './models.controller';
import { ModelsDeleteService } from './services/model.delete.service';
import { ModelsFindAllService } from './services/model.findAll.service';
import { ModelsFindOneService } from './services/model.findOne.service';
import { ModelsUpdateService } from './services/model.update.service';
import { ModelsCreateService } from './services/models.create.service';

@Module({
  controllers: [ModelController],
  providers: [
    PrismaService,
    ModelsCreateService,
    ModelsDeleteService,
    ModelsFindAllService,
    ModelsFindOneService,
    ModelsDeleteService,
    ModelsUpdateService
  ]
})
export class ModelsModule {}
