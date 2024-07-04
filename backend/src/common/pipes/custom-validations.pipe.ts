// src/common/pipes/custom-validation.pipe.ts

import { ArgumentMetadata, Injectable, ValidationPipe, BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (error) {
      if (error instanceof BadRequestException) {
        const validationErrors = error?.getResponse()['message'];
        if (Array.isArray(validationErrors)) {
          const firstErrorMessage = validationErrors?.[0];
          throw new BadRequestException(firstErrorMessage);
        } else {
          throw error;
        }
      }
      throw error;
    }
  }
}
