import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan';
import { CustomMiddleware } from './app.middleware';
import { VersioningType } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { urlencoded } from "express"
import compression from 'compression';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  const origin = configService.getOrThrow("ORIGIN")
  console.log(origin);

  app.enableCors({
    origin: ['https://' + origin, 'https://www.' + origin, origin]
  });
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: "1"
  });
  app.use(urlencoded({
    extended: true
  }))
  app.use(morgan('combined'));
  app.use(compression());
  app.use(CustomMiddleware)
  await app.listen(configService.getOrThrow("PORT"));
}
bootstrap();
