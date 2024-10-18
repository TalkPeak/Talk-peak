import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateTalkDto {
  @IsNumber()
  @IsNotEmpty()
  talk_id: number;

  @IsString()
  @IsNotEmpty()
  answer1: string;

  @IsString()
  @IsNotEmpty()
  answer2: string;

  @IsString()
  @IsNotEmpty()
  answer3: string;
}
