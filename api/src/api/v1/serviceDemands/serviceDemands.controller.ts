import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
// DTO
import { ServiceDemandDTO } from './serviceDemands.dto';
// Services
import { ServiceDemandsDeleteService } from './services/serviceDemands.delete.service';
import { ServiceDemandsFindAllService } from './services/serviceDemands.findAll.service';
import { ServiceDemandsFindOneService } from './services/serviceDemands.findOne.service';
import { ServiceDemandsUpdateService } from './services/serviceDemands.update.service';
import { ServiceDemandsCreateService } from './services/serviceDemands.create.service';

@Controller({
  path: 'serviceDemands',
  version: '1'
})
export class ServiceDemandController {
  constructor(
    private readonly createService: ServiceDemandsCreateService,
    private readonly updateService: ServiceDemandsUpdateService,
    private readonly deleteService: ServiceDemandsDeleteService,
    private readonly findOneService: ServiceDemandsFindOneService,
    private readonly findAllService: ServiceDemandsFindAllService
  ) {}

  @Post()
  async create(@Body() data: ServiceDemandDTO) {
    return this.createService.create(data);
  }

  @Get()
  async findAll() {
    return this.findAllService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.findOneService.findOne(String(id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: ServiceDemandDTO) {
    return this.updateService.update(String(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteService.delete(String(id));
  }
}
