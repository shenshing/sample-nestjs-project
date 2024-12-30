import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import logger from "./logger/logger.service";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["error", "warn"],
  });
  app.useGlobalPipes(new ValidationPipe());
  const env = process.env.NODE_ENV;

  logger.info(`This is info`);
  logger.warn(`This is warning`);
  logger.error(`This is error`);


  await app.listen(3000);
  const port = process.env.PORT;
  console.log(`App is running on port ${port}`);
}

bootstrap();
