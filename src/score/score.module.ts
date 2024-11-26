import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ScoreController],
  providers: [ScoreService],
})
export class ScoreModule {}
