import { Controller, Post, Get, Body, Param, Put } from '@nestjs/common';
import { MissionsService } from './missions.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';

@Controller('missions')
export class MissionsController {
  constructor(private readonly missionsService: MissionsService) {}

  @Get(':userId')
  async findOne(@Param('userId') userId: string) {
    return this.missionsService.findOne(+userId);
  }

  @Put(':userId')
  async update(
    @Param('userId') userId: string,
    @Body() updateMissionDto: UpdateMissionDto,
  ) {
    return this.missionsService.update(+userId, updateMissionDto);
  }
}
