import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, HttpException, Param, NotFoundException } from '@nestjs/common';

import { CreateUserDTO } from './domain/dto/user.dto'
import { UsersService } from './users.service'
import { User } from './domain/models/user.interface';

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) { }

  @Get('/')
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    try {
      return this.userService.getUser(id);
    } catch (Exception) {
      throw new HttpException("Exception", HttpStatus.CONFLICT);
    }
  }

  @Post('/new')
  async createUser(@Res() response, @Body() createUserDTO: CreateUserDTO){
    try {
      const user = await this.userService.createUser(createUserDTO);

      return response.status(HttpStatus.OK).json({
        message: "User correctly created",
        user: user
      })
    } catch (Exception) {
      throw new HttpException("Exception", HttpStatus.CONFLICT);
    }

  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string): void {
    try {
      this.userService.deleteUser(id);
    } catch (Exception) {
      throw new HttpException("Exception", HttpStatus.CONFLICT);
    }
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() createUserDTO: CreateUserDTO, @Res() response): Promise<User> {
    try {
      const updatedUser = await this.userService.updateUser(id, createUserDTO);
      response.status(HttpStatus.OK).json(updatedUser)
      return updatedUser;

    } catch (Exception) {
      throw new HttpException("Exception", HttpStatus.CONFLICT);
    }
  }

}
