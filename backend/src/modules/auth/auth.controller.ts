import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from 'common/dto/create-user.dto';

// dtos
import { AuthService } from 'modules/auth/auth.service';
import { BaseResponseDto } from 'common/dto/base-response.dto';
import { SigninUserDto } from './dto/signin-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED) 
  async signup(
    @Body() createUserDto: CreateUserDto,
  ): Promise<BaseResponseDto<any>> {
    try {
      // Signup method from AuthService
      const result = await this.authService.signup(createUserDto);
      return result;
    } catch (error) {
      throw error; // handles ServiceException
    }
  }

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  async signin(
    @Body() signinUserDto: SigninUserDto,
  ): Promise<BaseResponseDto<any>> {
    try {
      // Signin method from AuthService
      const result = await this.authService.signin(signinUserDto);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
