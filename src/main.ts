import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const serverConfig = config.get('server');
  const PORT = process.env.PORT || serverConfig.port;

  await app.listen(PORT);
}
bootstrap();
