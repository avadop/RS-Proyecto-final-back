import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';

import { CreateUserDTO } from '../domain/dto/user.dto'

@Controller('users')
export class UsersController {

  @Post('/new')
  createUser(@Res() response, @Body() createUserDTO: CreateUserDTO){
    console.log(createUserDTO);
    return response.status(HttpStatus.OK).json({
      message: "revicido"
    })
  }
}
