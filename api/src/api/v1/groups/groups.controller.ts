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
import { GroupDTO } from './groups.dto';
// Services
import { GroupsDeleteService } from './services/group.delete.service';
import { GroupsFindAllService } from './services/group.findAll.service';
import { GroupsFindOneService } from './services/group.findOne.service';
import { GroupsUpdateService } from './services/group.update.service';
import { GroupsCreateService } from './services/group.create.service';

@Controller({
  path: 'groups',
  version: '1'
})
export class GroupController {
  constructor(
    private readonly createService: GroupsCreateService,
    private readonly updateService: GroupsUpdateService,
    private readonly deleteService: GroupsDeleteService,
    private readonly findOneService: GroupsFindOneService,
    private readonly findAllService: GroupsFindAllService
  ) {}

  @Post()
  async create(@Body() data: GroupDTO) {
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
  async update(@Param('id') id: string, @Body() data: GroupDTO) {
    return this.updateService.update(String(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteService.delete(String(id));
  }
}
