import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// Localization
import LOCALIZATION from 'common/locales';

export class SigninUserDto {

  @IsString({ message: LOCALIZATION.EMAIL_STRING })
  @IsNotEmpty({ message: LOCALIZATION.EMAIL_REQUIRED })
  email: string;

  @IsNotEmpty({ message: LOCALIZATION.PASSWORD_REQUIRED })
  @IsString({ message: LOCALIZATION.PASSWORD_STRING })
  password: string;
}
