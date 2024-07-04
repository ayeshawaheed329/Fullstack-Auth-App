// filters/all-exceptions.filter.ts

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal Server Error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
    }

    const responseBody = {
      success: status >= HttpStatus.OK && status < HttpStatus.BAD_REQUEST,
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: message,
    };

    // Customize error response for specific error types if needed
    if (status === HttpStatus.INTERNAL_SERVER_ERROR && !(exception instanceof HttpException)) {
      responseBody.message = 'Server Error Occurred';
    }

    httpAdapter.reply(response, responseBody, status);
  }
}
