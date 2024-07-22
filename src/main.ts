import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      //whitelist solo deja la data que necesita y elimina todo aquello que el cliente pueda esta enviando de más
      whitelist: true,
      //forbidNonWhitelisted arroja un error indicando que propiedades esta mandando el cliente que no son las esperadas
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
