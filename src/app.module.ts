import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { SocketModule } from './socket/socket.module';
import { Eventgateway } from './event.gateway';
import { ConfigModule } from '@nestjs/config';
import config from './config/module.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';
import { DataSource } from 'typeorm';
import { User } from './game/user.entity';

@Module({
  imports: [GameModule, SocketModule, ConfigModule.forRoot({
    load: [config]
  }), TypeOrmModule.forRoot({ ...databaseConfig(), entities: [User] })],
  controllers: [AppController],
  providers: [AppService, Eventgateway],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) { }
  configure(consumer: MiddlewareConsumer) {

  }
}
