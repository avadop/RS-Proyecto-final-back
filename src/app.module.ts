import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule,
    MongooseModule.forRoot('mongodb+srv://user:VhoOxyYV7fQ1KQXV@cluster0.ca8v1.mongodb.net/Ribera-salud?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
