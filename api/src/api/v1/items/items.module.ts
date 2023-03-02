import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ItemController } from './items.controller';
import { ItemsDeleteService } from './services/item.delete.service';
import { ItemsFindAllService } from './services/item.findAll.service';
import { ItemsFindOneService } from './services/item.findOne.service';
import { ItemsUpdateService } from './services/item.update.service';
import { ItemsCreateService } from './services/item.create.service';

@Module({
  controllers: [ItemController],
  providers: [
    PrismaService,
    ItemsCreateService,
    ItemsDeleteService,
    ItemsFindAllService,
    ItemsFindOneService,
    ItemsDeleteService,
    ItemsUpdateService
  ]
})
export class ItemsModule {}
