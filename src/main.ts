import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const documentationPath = path.resolve(__dirname, '..', 'documentation');
  app.use('/documentation', express.static(documentationPath));

  const config = new DocumentBuilder()
    .setTitle('Online Course Registration System')
    .setDescription(
      'This project aims to provide a platform where users can create, manage, and enroll in online courses. Its goal is to streamline the process of course creation, lesson management, user authentication, and user access control. The project consists of an API for managing online courses, with functionalities for both teachers and students. For more details, please visit the [Code Documentation](https://lms-8ajl.onrender.com/documentation).',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('auth')
    .addTag('users')
    .addTag('courses')
    .addTag('lessons')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT || 3000;

  await app.listen(port);
}
bootstrap();
