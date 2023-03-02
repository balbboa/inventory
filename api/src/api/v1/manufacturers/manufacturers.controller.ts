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
import { ManufacturerDTO } from './manufacturers.dto';
// Services
import { ManufacturersDeleteService } from './services/manufacturer.delete.service';
import { ManufacturersFindAllService } from './services/manufacturer.findAll.service';
import { ManufacturersFindOneService } from './services/manufacturer.findOne.service';
import { ManufacturersUpdateService } from './services/manufacturer.update.service';
import { ManufacturersCreateService } from './services/manufacturer.create.service';

@Controller({
  path: 'manufacturers',
  version: '1'
})
export class ManufacturerController {
  constructor(
    private readonly createService: ManufacturersCreateService,
    private readonly updateService: ManufacturersUpdateService,
    private readonly deleteService: ManufacturersDeleteService,
    private readonly findOneService: ManufacturersFindOneService,
    private readonly findAllService: ManufacturersFindAllService
  ) {}

  @Post()
  async create(@Body() data: ManufacturerDTO) {
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
  async update(@Param('id') id: string, @Body() data: ManufacturerDTO) {
    return this.updateService.update(String(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteService.delete(String(id));
  }
}
