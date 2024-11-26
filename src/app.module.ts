import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScoreModule } from './score/score.module';

@Module({
  imports: [ScoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
