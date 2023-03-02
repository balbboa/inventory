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
import { ServiceTypeDTO } from './serviceTypes.dto';
// Services
import { ServiceTypesDeleteService } from './services/serviceType.delete.service';
import { ServiceTypesFindAllService } from './services/serviceType.findAll.service';
import { ServiceTypesFindOneService } from './services/serviceType.findOne.service';
import { ServiceTypesUpdateService } from './services/serviceType.update.service';
import { ServiceTypesCreateService } from './services/serviceType.create.service';

@Controller({
  path: 'servicetypes',
  version: '1'
})
export class ServiceTypeController {
  constructor(
    private readonly createService: ServiceTypesCreateService,
    private readonly updateService: ServiceTypesUpdateService,
    private readonly deleteService: ServiceTypesDeleteService,
    private readonly findOneService: ServiceTypesFindOneService,
    private readonly findAllService: ServiceTypesFindAllService
  ) {}

  @Post()
  async create(@Body() data: ServiceTypeDTO) {
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
  async update(@Param('id') id: string, @Body() data: ServiceTypeDTO) {
    return this.updateService.update(String(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteService.delete(String(id));
  }
}
