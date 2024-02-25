import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './dto/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  exports: [TypeOrmModule],
  controllers: [GameController],
  providers: [GameService]
})
export class GameModule { }
