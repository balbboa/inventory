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
import { ServiceDTO } from './services.dto';
// Services
import { ServicesDeleteService } from './services/service.delete.service';
import { ServicesFindAllService } from './services/service.findAll.service';
import { ServicesFindOneService } from './services/service.findOne.service';
import { ServicesUpdateService } from './services/service.update.service';
import { ServicesCreateService } from './services/service.create.service';

@Controller({
  path: 'services',
  version: '1'
})
export class ServiceController {
  constructor(
    private readonly createService: ServicesCreateService,
    private readonly updateService: ServicesUpdateService,
    private readonly deleteService: ServicesDeleteService,
    private readonly findOneService: ServicesFindOneService,
    private readonly findAllService: ServicesFindAllService
  ) {}

  @Post()
  async create(@Body() data: ServiceDTO) {
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
  async update(@Param('id') id: string, @Body() data: ServiceDTO) {
    return this.updateService.update(String(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteService.delete(String(id));
  }
}
