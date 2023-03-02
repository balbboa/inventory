import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ItemDemandController } from './itemDemands.controller';
import { ItemDemandsDeleteService } from './services/itemDemands.delete.service';
import { ItemDemandsFindAllService } from './services/itemDemands.findAll.service';
import { ItemDemandsFindOneService } from './services/itemDemands.findOne.service';
import { ItemDemandsUpdateService } from './services/itemDemands.update.service';
import { ItemDemandsCreateService } from './services/itemDemands.create.service';

@Module({
  controllers: [ItemDemandController],
  providers: [
    PrismaService,
    ItemDemandsCreateService,
    ItemDemandsDeleteService,
    ItemDemandsFindAllService,
    ItemDemandsFindOneService,
    ItemDemandsDeleteService,
    ItemDemandsUpdateService
  ]
})
export class ItemDemandsModule {}
