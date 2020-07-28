import { Module } from '@nestjs/common';
import { UsersController } from './ui/users.controller';
import { UsersService } from './app/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './infraestructure/mongoDB/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'User',
      schema: userSchema
    }]),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
