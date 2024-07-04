import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// modules
import { AuthModule } from 'modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserModule, AuthModule, DatabaseModule], // All modules used in app
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
