import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

// module
import helmet from 'helmet';
import * as express from 'express';

// exception filter
import { AllExceptionsFilter } from './all-exceptions.filter';

async function bootstrap() {
  // Create NestJS app instance
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'warn'], // log warnings and error
  });

  // Enable trust proxy to handle proxy headers like X-Forwarded-For
  app.enable('trust proxy');

  // middleware for setting HTTP headers securely
  app.use(helmet());

  // enable configurations
  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization',
  };
  app.enableCors(options);

  // Use express.urlencoded middleware for parsing form data
  app.use(
    express.urlencoded({
      limit: '50mb',
      extended: true,
      parameterLimit: 50000, // dummy value
    }),
  );

  // Get the HttpAdapterHost instance
  const httpAdapterHost = app.get(HttpAdapterHost);

  // Register the AllExceptionsFilter globally
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));

  // Start the application and listen on given port
  await app.listen(3001);
}

bootstrap();
