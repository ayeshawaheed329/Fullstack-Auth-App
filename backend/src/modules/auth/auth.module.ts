import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; 
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'modules/user/user.module';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY, // Retrieve secret key from environment variables 
      signOptions: { expiresIn: '24h' }, // Token expiry in 1 day
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
