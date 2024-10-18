import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MissionsModule } from './missions/missions.module';
import { TalksModule } from './talks/talks.module';
import { JournalsModule } from './journals/journals.module';

@Module({
  imports: [UsersModule, MissionsModule, TalksModule, JournalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
