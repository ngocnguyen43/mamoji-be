import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan';
import { CustomMiddleware } from './app.middleware';
import { VersioningType } from '@nestjs/common';
import config from './config';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  console.log(config);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: "1"
  });
  app.use(morgan('combined'));
  app.use(CustomMiddleware)
  await app.listen(config.PORT);
}
bootstrap();
