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
import { ImmobileDTO } from './immobiles.dto';
// Services
import { ImmobilesDeleteService } from './services/immobile.delete.service';
import { ImmobilesFindAllService } from './services/immobile.findAll.service';
import { ImmobilesFindOneService } from './services/immobile.findOne.service';
import { ImmobilesUpdateService } from './services/immobile.update.service';
import { ImmobilesCreateService } from './services/immobile.create.service';

@Controller({
  path: 'immobiles',
  version: '1'
})
export class ImmobileController {
  constructor(
    private readonly createService: ImmobilesCreateService,
    private readonly updateService: ImmobilesUpdateService,
    private readonly deleteService: ImmobilesDeleteService,
    private readonly findOneService: ImmobilesFindOneService,
    private readonly findAllService: ImmobilesFindAllService
  ) {}

  @Post()
  async create(@Body() data: ImmobileDTO) {
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
  async update(@Param('id') id: string, @Body() data: ImmobileDTO) {
    return this.updateService.update(String(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteService.delete(String(id));
  }
}
