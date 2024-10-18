import { Controller, Get, Body, Param, Put, Post } from '@nestjs/common';
import { MissionsService } from './missions.service';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { CreateMissionDto } from './dto/create-mission.dto';

@Controller('missions')
export class MissionsController {
  constructor(private readonly missionsService: MissionsService) {}

  @Post()
  async create(@Body() createMissionDto: CreateMissionDto) {
    return this.missionsService.create(createMissionDto);
  }

  @Get(':id')
  async findOne(@Param('userId') userId: string) {
    return this.missionsService.findOne(+userId);
  }

  @Put(':id')
  async update(
    @Param('userId') userId: string,
    @Body() updateMissionDto: UpdateMissionDto,
  ) {
    return this.missionsService.update(+userId, updateMissionDto);
  }
}
