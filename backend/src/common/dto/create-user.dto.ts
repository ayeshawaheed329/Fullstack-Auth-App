// src/auth/dto/create-user.dto.ts

import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

// validator
import {   IsPasswordValid } from 'common/utils/password.validator'; 

// Localization
import LOCALIZATION from 'common/locales';

export class CreateUserDto {
  @IsNotEmpty({ message: LOCALIZATION.NAME_REQUIRED })
  @IsString({ message: LOCALIZATION.NAME_STRING })
  @MaxLength(100, { message: LOCALIZATION.NAME_TOO_LONG }) 
  name: string;

  @IsNotEmpty({ message: LOCALIZATION.EMAIL_REQUIRED })
  @IsEmail({}, { message: LOCALIZATION.EMAIL_VALID })
  @MaxLength(254, { message: LOCALIZATION.EMAIL_TOO_LONG })
  email: string;

  @IsPasswordValid()
  @IsNotEmpty({ message: LOCALIZATION.PASSWORD_REQUIRED })
  @IsString({ message: LOCALIZATION.PASSWORD_STRING })
  @MaxLength(128, { message: LOCALIZATION.PASSWORD_TOO_LONG })
  password: string;
}
