import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Journal } from './entities/journal.entity';
import { JournalsService } from './journals.service';
import { JournalsController } from './journals.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Journal])],
  controllers: [JournalsController],
  providers: [JournalsService],
})
export class JournalsModule {}
