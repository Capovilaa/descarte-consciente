import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateScoreDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  score: number;

  @IsOptional()
  date: Date;
}
