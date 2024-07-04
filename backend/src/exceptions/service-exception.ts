// exceptions/ServiceException.ts

import { HttpException, HttpStatus } from '@nestjs/common';
import { ResponseCode } from 'constants/response-codes'; // Adjust the path as per your project structure

export class ServiceException extends HttpException {
  constructor(responseCode: ResponseCode) {
    super({
      status: false,
      message: responseCode.value,
      statusCode: responseCode.code,
      data: null,
    }, ServiceException.getHttpStatus(responseCode.code)); // Determine HttpStatus based on ResponseCode
  }

  private static getHttpStatus(responseCode: number): HttpStatus {
    switch (responseCode) {
      case 400:
        return HttpStatus.BAD_REQUEST;
      case 401:
        return HttpStatus.UNAUTHORIZED;
      case 403:
        return HttpStatus.FORBIDDEN;
      case 404:
        return HttpStatus.NOT_FOUND;
      case 500:
      default:
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }
}
