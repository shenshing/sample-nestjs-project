import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const env = process.env.NODE_ENV;

  console.log(`----> env is ${env}`);

  await app.listen(3000);
  const port = process.env.PORT;
  console.log(`App is running on port ${port}`);
  console.log(process.env.JWT_SECRET);
}
bootstrap();
