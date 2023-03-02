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
import { ItemDemandDTO } from './itemDemands.dto';
// Services
import { ItemDemandsDeleteService } from './services/itemDemands.delete.service';
import { ItemDemandsFindAllService } from './services/itemDemands.findAll.service';
import { ItemDemandsFindOneService } from './services/itemDemands.findOne.service';
import { ItemDemandsUpdateService } from './services/itemDemands.update.service';
import { ItemDemandsCreateService } from './services/itemDemands.create.service';

@Controller({
  path: 'itemDemands',
  version: '1'
})
export class ItemDemandController {
  constructor(
    private readonly createService: ItemDemandsCreateService,
    private readonly updateService: ItemDemandsUpdateService,
    private readonly deleteService: ItemDemandsDeleteService,
    private readonly findOneService: ItemDemandsFindOneService,
    private readonly findAllService: ItemDemandsFindAllService
  ) {}

  @Post()
  async create(@Body() data: ItemDemandDTO) {
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
  async update(@Param('id') id: string, @Body() data: ItemDemandDTO) {
    return this.updateService.update(String(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteService.delete(String(id));
  }
}
