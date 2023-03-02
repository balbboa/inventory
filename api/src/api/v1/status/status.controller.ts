import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// DTO
import { StatusDTO } from './status.dto';
// Services
import { StatusFindAllService } from './services/status.findAll.service';
import { StatusFindOneService } from './services/status.findOne.service';
import { StatusCreateService } from './services/status.create.service';

@Controller({
  path: 'status',
  version: '1'
})
export class StatusController {
  constructor(
    private readonly createService: StatusCreateService,
    private readonly findOneService: StatusFindOneService,
    private readonly findAllService: StatusFindAllService
  ) {}

  @Post()
  async create(@Body() data: StatusDTO) {
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
}
