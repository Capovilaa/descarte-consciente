import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateScoreDTO } from './dto/create-score';

@Injectable()
export class ScoreService {
  constructor(private readonly databaseService: DatabaseService) {}

  // busca todos os placares
  async findAll() {
    const allScores = await this.databaseService.score.findMany();
    if (allScores.length === 0) {
      return new NotFoundException('Nenhum score encontrado');
    }
    return allScores;
  }

  // salva score no banco de dados
  async saveScore(createScoreDto: CreateScoreDTO) {
    try {
      const scoreData = {
        ...createScoreDto,
        date: new Date(),
      };
      return await this.databaseService.score.create({ data: scoreData });
    } catch (error) {
      throw new HttpException('Erro ao salvar score', HttpStatus.BAD_REQUEST);
    }
  }

  // apaga score do banco de dados
  async deleteScore(id: number) {
    try {
      return await this.databaseService.score.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new NotFoundException('Score não encontrado');
    }
  }
}
