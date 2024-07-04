import { Injectable } from '@nestjs/common';

// services
import { UserService } from 'modules/user/user.service';
import { JwtService } from '@nestjs/jwt';

// dtos
import { CreateUserDto } from 'common/dto/create-user.dto';
import { User } from '@prisma/client';
import { BaseResponseDto } from 'common/dto/base-response.dto';
import { ResponseCode } from 'constants/response-codes';
import { SigninUserDto } from './dto/signin-user.dto';

// Localization
import LOCALIZATION from 'common/locales';

// utlities
import {
  hashPassword,
  comparePasswords,
} from 'common/utils/password-utilities'; // Import your password hashing function

// exception
import { ServiceException } from 'exceptions/service-exception';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // Signup a new user
  async signup(createUserDto: CreateUserDto): Promise<BaseResponseDto<User>> {
    try {
      // Extract info
      const { name, email, password } = createUserDto;

      // Check if user already exists
      const existingUser = await this.userService.findUserByEmail(email);

      if (existingUser) {
        const userExists = new ResponseCode(
          ResponseCode.BAD_REQUEST.code,
          LOCALIZATION.USER_EXISTS,
        );
        throw new ServiceException(userExists);
      }

      // Hash the password before storing
      const hashedPassword = await hashPassword(password);

      // craete user
      const createUserResult = await this.userService.createUser(
        name,
        email,
        hashedPassword, // Use hashed password
      );

      return createUserResult;
    } catch (error) {
      throw error; // global exception handler handle this
    }
  }

  // Sign in
  async signin(
    signinUserDto: SigninUserDto,
  ): Promise<BaseResponseDto<{ token: string; userId: string }>> {
    try {
      const { email, password } = signinUserDto;

      // Check if user exists
      const user = await this.userService.findUserByEmail(email);

      if (!user) {
        const userExists = new ResponseCode(
          ResponseCode.BAD_REQUEST.code,
          LOCALIZATION.USER_NOT_FOUND,
        );
        throw new ServiceException(userExists);
      }

      // Compare passwords
      const isMatch = await comparePasswords(password, user.password);

      if (!isMatch) {
        const userExists = new ResponseCode(
          ResponseCode.UNAUTHORIZED.code,
          LOCALIZATION.INVALID_CREDENTIALS,
        );
        throw new ServiceException(userExists);
      }

      // Generate JWT token
      const token = this.jwtService.sign({
        email: user?.email,
        name: user?.name,
        userId: user?.id,
      });

      // signin response
      const signinResponse = new ResponseCode(
        ResponseCode.SUCCESS.code,
        LOCALIZATION.LOGIN_SUCCESSFULLY,
      );
      return new BaseResponseDto<{ token: string; userId: string }>(
        signinResponse,
        {
          token,
          userId: user.id.toString(),
        },
        true,
      );
    } catch (error) {
      throw error; // global exception handler handle this
    }
  }
}
