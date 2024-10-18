import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mission } from './entities/mission.entity';
import { MissionsController } from './missions.controller';
import { MissionsService } from './missions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mission])],
  controllers: [MissionsController],
  providers: [MissionsService],
})
export class MissionsModule {}
