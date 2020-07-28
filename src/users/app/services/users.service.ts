import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from 'src/users/domain/models/user.interface'
import { CreateUserDTO } from 'src/users/domain/dto/user.dto'

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private userModel: Model<User>) { }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find({});
  }

  async getUser(userID: string): Promise<User> {
    let user = await this.userModel.findById(userID);

    if (!user) throw new NotFoundException();

    return user;
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const user = new this.userModel(createUserDTO);
    return await user.save();
  }

  async deleteUser(userID: string): Promise<User> {
    let user = await this.userModel.findByIdAndDelete(userID);

    if (!user) throw new NotFoundException();

    return user;
  }

  async updateUser(userID: string, createUserDTO: CreateUserDTO): Promise<User> {
    return await this.userModel.findByIdAndUpdate(userID, createUserDTO, {new: true});
  }
}
