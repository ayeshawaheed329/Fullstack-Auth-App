import { registerDecorator, ValidationOptions } from 'class-validator';
import * as zxcvbn from 'zxcvbn';

// Localization 
import LOCALIZATION from 'common/locales';

export function IsPasswordValid(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object?.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (!value) {
            this.error = LOCALIZATION.PASSWORD_REQUIRED;
            return false;
          }
          
          // Minimum length check
          if (value.length < 8) {
            this.error = LOCALIZATION.PASSWORD_MIN_LENGTH;
            return false;
          }
          
          // Check for at least 1 letter, 1 number, and 1 special character
          const letterRegex = /[a-zA-Z]/;
          const numberRegex = /[0-9]/;
          const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/; // Add more special characters if needed

          if (!letterRegex.test(value)) {
            this.error = LOCALIZATION.PASSWORD_LETTER;
            return false;
          }

          if (!numberRegex.test(value)) {
            this.error = LOCALIZATION.PASSWORD_NUMBER;
            return false;
          }

          if (!specialCharRegex.test(value)) {
            this.error = LOCALIZATION.PASSWORD_SPECIAL_CHAR;
            return false;
          }
          
          // Strength check using zxcvbn (optional)
          const result = zxcvbn(value);
          if (result.score === 0) {
            this.error = LOCALIZATION.WEAK_PASSWORD;
            return false;
          }

          return true;
        },
        defaultMessage(): string {
          return this.error || LOCALIZATION.SOMETHING_WENT_WRONG;
        }
      },
    });
  };
}
