import { Module } from '@nestjs/common';
import { TalksService } from './talks.service';
import { TalksController } from './talks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Talk } from './entities/talk.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Talk])], // Talk 엔티티를 위한 Repository 제공
  controllers: [TalksController],
  providers: [TalksService],
})
export class TalksModule {}
