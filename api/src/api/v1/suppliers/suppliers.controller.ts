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
import { SupplierDTO } from './suppliers.dto';
// Services
import { SuppliersDeleteService } from './services/supplier.delete.service';
import { SuppliersFindAllService } from './services/supplier.findAll.service';
import { SuppliersFindOneService } from './services/supplier.findOne.service';
import { SuppliersUpdateService } from './services/supplier.update.service';
import { SuppliersCreateService } from './services/supplier.create.service';

@Controller({
  path: 'suppliers',
  version: '1'
})
export class SupplierController {
  constructor(
    private readonly createService: SuppliersCreateService,
    private readonly updateService: SuppliersUpdateService,
    private readonly deleteService: SuppliersDeleteService,
    private readonly findOneService: SuppliersFindOneService,
    private readonly findAllService: SuppliersFindAllService
  ) {}

  @Post()
  async create(@Body() data: SupplierDTO) {
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
  async update(@Param('id') id: string, @Body() data: SupplierDTO) {
    return this.updateService.update(String(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteService.delete(String(id));
  }
}
