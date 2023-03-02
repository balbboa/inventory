import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { SupplierController } from './suppliers.controller';
import { SuppliersDeleteService } from './services/supplier.delete.service';
import { SuppliersFindAllService } from './services/supplier.findAll.service';
import { SuppliersFindOneService } from './services/supplier.findOne.service';
import { SuppliersUpdateService } from './services/supplier.update.service';
import { SuppliersCreateService } from './services/supplier.create.service';

@Module({
  controllers: [SupplierController],
  providers: [
    PrismaService,
    SuppliersCreateService,
    SuppliersDeleteService,
    SuppliersFindAllService,
    SuppliersFindOneService,
    SuppliersDeleteService,
    SuppliersUpdateService
  ]
})
export class SuppliersModule {}
