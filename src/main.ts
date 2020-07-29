import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder} from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Ribera salud final project')
    .setDescription('BackEnd documentation for the final project of ribera salud')
    .setVersion('1.0')
    .addTag('patients')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
