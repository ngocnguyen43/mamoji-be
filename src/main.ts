import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan';
import { CustomMiddleware } from './app.middleware';
import { VersioningType } from '@nestjs/common';
import config from './config/module.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: "1"
  });
  app.use(morgan('combined'));
  app.use(CustomMiddleware)
  await app.listen(configService.getOrThrow("PORT"));
}
bootstrap();
