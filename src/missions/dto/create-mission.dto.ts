import { IsNotEmpty, IsNumber } from 'class-validator';
import { UpdateMissionDto } from './update-mission.dto';

export class CreateMissionDto {
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  talk_id: number;

  mission: boolean;
}
