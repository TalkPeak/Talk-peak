import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { Mission } from './entities/mission.entity';
import { CreateMissionDto } from './dto/create-mission.dto';

@Injectable()
export class MissionsService {
  constructor(
    @InjectRepository(Mission)
    private missionsRepository: Repository<Mission>,
  ) {}

  async findOne(id: number): Promise<Mission | undefined> {
    return this.missionsRepository.findOneBy({ id });
  }

  async create(createMissionDto: CreateMissionDto): Promise<Mission> {
    const mission = this.missionsRepository.create(createMissionDto);
    return this.missionsRepository.save(mission);
  }

  // 특정 미션 업데이트
  async update(
    id: number,
    updateMissionDto: UpdateMissionDto,
  ): Promise<Mission | undefined> {
    const mission = await this.missionsRepository.findOneBy({ id });
    if (!mission) {
      return undefined;
    }
    Object.assign(mission, updateMissionDto);
    return this.missionsRepository.save(mission);
  }
}
