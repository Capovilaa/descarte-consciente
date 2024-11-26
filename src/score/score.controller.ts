import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ScoreService } from './score.service';
import { CreateScoreDTO } from './dto/create-score';

@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  // obtém todos os scores
  @Get()
  findAll() {
    return this.scoreService.findAll();
  }

  // cria score
  @Post()
  create(
    @Body(ValidationPipe)
    createScoreDto: CreateScoreDTO,
  ) {    
    return this.scoreService.saveScore(createScoreDto);
  }

  // deleta score
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.scoreService.deleteScore(id);
  }
}
