import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/module.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';
import { DataSource } from 'typeorm';
import { Player } from './game/dto/player.entity';

@Module({
  imports: [GameModule, ConfigModule.forRoot({
    load: [config]
  }), TypeOrmModule.forRoot({ ...databaseConfig(), entities: [Player] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) { }
  configure(consumer: MiddlewareConsumer) {

  }
}
