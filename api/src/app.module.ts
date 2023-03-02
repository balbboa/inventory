import { Module } from '@nestjs/common';
import { GroupsModule } from './api/v1/groups/groups.module';
import { ImmobilesModule } from './api/v1/immobile/immobiles.module';
import { ItemDemandsModule } from './api/v1/itemDemands/itemDemands.module';
import { ItemsModule } from './api/v1/items/items.module';
import { ManufacturersModule } from './api/v1/manufacturers/manufacturers.module';
import { ModelsModule } from './api/v1/models/models.module';
import { OpmsModule } from './api/v1/opms/opms.module';
import { ServiceDemandsModule } from './api/v1/serviceDemands/serviceDemands.module';
import { ServicesModule } from './api/v1/services/services.module';
import { ServiceTypesModule } from './api/v1/serviceTypes/serviceTypes.module';
import { StatusModule } from './api/v1/status/status.module';
import { SuppliersModule } from './api/v1/suppliers/suppliers.module';

@Module({
  imports: [
    ModelsModule,
    ManufacturersModule,
    OpmsModule,
    GroupsModule,
    ItemsModule,
    StatusModule,
    ImmobilesModule,
    ServicesModule,
    SuppliersModule,
    ServiceTypesModule,
    ServiceDemandsModule,
    ItemDemandsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
