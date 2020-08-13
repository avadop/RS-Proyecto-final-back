import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MockUserService } from './mocks/mock-user.service';
import * as userRespBody from './mocks/user-response-body.json';
import { CreateUserDTO } from './domain/dto/user.dto';
import { User } from './domain/models/user.interface';

describe('Users Controller', () => {
  let controller: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{provide: UsersService, useClass: MockUserService}],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllUsers()', () => {
    it('should call usersService.getAllUsers()', async () =>{
      //Decimos que cuando llamamos a esa funcion nos va a devolver el resultado users
      jest.spyOn(controller['userService'], 'getAllUsers').mockImplementation(() => 
        Promise.resolve([userRespBody] as unknown as User[]));

      await controller.getAllUsers();
      expect(controller['userService'].getAllUsers).toHaveBeenCalled();
    })
  })

  describe('getAllUsers()', () => {
    it('should return an array of users, calling usersService.getAllUsers()', async () =>{

      //Decimos que cuando llamamos a esa funcion nos va a devolver el resultado users
      jest.spyOn(usersService, 'getAllUsers').mockImplementation(() => Promise.resolve([userRespBody] as unknown as User[]));

      expect(await controller['userService'].getAllUsers()).toEqual([userRespBody] as unknown as User[]);
    })
  })
});
