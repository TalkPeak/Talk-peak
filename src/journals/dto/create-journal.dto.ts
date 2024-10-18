import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateJournalDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
