import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MissionsModule } from './missions/missions.module';
import { TalksModule } from './talks/talks.module';
import { JournalsModule } from './journals/journals.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeORMConfig } from './ormconfig';

@Module({
  imports: [
    UsersModule,
    MissionsModule,
    TalksModule,
    JournalsModule,
    TypeOrmModule.forRoot(typeORMConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
