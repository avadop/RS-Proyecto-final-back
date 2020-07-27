import { Module } from '@nestjs/common';
import { UsersController } from './ui/users.controller';
import { UsersService } from './app/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
