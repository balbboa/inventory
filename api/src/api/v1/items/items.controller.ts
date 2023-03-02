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
import { ItemDTO } from './items.dto';
// Services
import { ItemsDeleteService } from './services/item.delete.service';
import { ItemsFindAllService } from './services/item.findAll.service';
import { ItemsFindOneService } from './services/item.findOne.service';
import { ItemsUpdateService } from './services/item.update.service';
import { ItemsCreateService } from './services/item.create.service';

@Controller({
  path: 'items',
  version: '1'
})
export class ItemController {
  constructor(
    private readonly createService: ItemsCreateService,
    private readonly updateService: ItemsUpdateService,
    private readonly deleteService: ItemsDeleteService,
    private readonly findOneService: ItemsFindOneService,
    private readonly findAllService: ItemsFindAllService
  ) {}

  @Post()
  async create(@Body() data: ItemDTO) {
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
  async update(@Param('id') id: string, @Body() data: ItemDTO) {
    return this.updateService.update(String(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteService.delete(String(id));
  }
}
