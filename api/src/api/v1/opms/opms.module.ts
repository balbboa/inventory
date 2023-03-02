import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { OpmController } from './opms.controller';
import { OpmsDeleteService } from './services/opm.delete.service';
import { OpmsFindAllService } from './services/opm.findAll.service';
import { OpmsFindOneService } from './services/opm.findOne.service';
import { OpmsUpdateService } from './services/opm.update.service';
import { OpmsCreateService } from './services/opms.create.service';

@Module({
  controllers: [OpmController],
  providers: [
    PrismaService,
    OpmsCreateService,
    OpmsDeleteService,
    OpmsFindAllService,
    OpmsFindOneService,
    OpmsDeleteService,
    OpmsUpdateService
  ]
})
export class OpmsModule {}
