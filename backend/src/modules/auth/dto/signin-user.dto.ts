import {  IsNotEmpty, IsString } from 'class-validator';

// Localization
import LOCALIZATION from 'common/locales';

export class SigninUserDto {

  @IsNotEmpty({ message: LOCALIZATION.EMAIL_REQUIRED })
  @IsString({ message: LOCALIZATION.EMAIL_STRING })
  email: string;

  @IsNotEmpty({ message: LOCALIZATION.PASSWORD_REQUIRED })
  @IsString({ message: LOCALIZATION.PASSWORD_STRING })
  password: string;
}
