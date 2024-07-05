import { Injectable } from '@nestjs/common';

// Database services
import { User } from '@prisma/client';
import { DatabaseService } from 'database/database.service';

// Dto
import { BaseResponseDto } from 'common/dto/base-response.dto';

// localization
import LOCALIZATION from 'common/locales';

// Response Code
import { ResponseCode } from 'constants/response-codes';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  // Create user service
  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<BaseResponseDto<any>> {
    try {
      const createdUser = await this.databaseService.user.create({
        data: {
          name,
          email,
          password // password is already hashed
        },
      });

      const userCreated = new ResponseCode(
        ResponseCode.RESOURCE_CREATED.code,
        LOCALIZATION.USER_CREATED
      );

      // return user name and email not password
      const data = {
        name: createdUser?.name,
        email: createdUser?.email
      };
      return new BaseResponseDto<{ name: string; email: string }>(
        userCreated,
        data,
        true
      );
    } catch (error) {
      // throw error will handled by all exception filter
      throw error;
    }
  }

  // Check unique user
  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.databaseService.user.findUnique({
      where: {
        email
      },
    });

    return user;
  }
}
