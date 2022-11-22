import {Body, Controller, Delete, Get, Inject, Param, Post, Put} from '@nestjs/common';
import {AppService} from './app.service';
import {CreateUser, CreateUserUsecase, DeleteUserUsecase, FindAllUsersUsecase, FindUserByIdUsecase, UpdateUserUsecase, User} from '@ddd-demo/api/domain';
import {UserUsecase} from '@ddd-demo/api/application';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(UserUsecase.FIND_ALL_USERS_USECASE)
    private readonly findAllUsersUsecase: FindAllUsersUsecase,
    @Inject(UserUsecase.FIND_USER_BY_ID_USECASE)
    private readonly findUserByIdUsecase: FindUserByIdUsecase,
    @Inject(UserUsecase.DELETE_USER_USECASE)
    private readonly deleteUserUsecase: DeleteUserUsecase,
    @Inject(UserUsecase.UPDATE_USER_USECASE)
    private readonly updateUserUsecase: UpdateUserUsecase,
    @Inject(UserUsecase.CREATE_USER_USECASE)
    private readonly createUserUsecase: CreateUserUsecase
  ) {
  }

  @Get('users')
  getUsers(): Promise<User[]> {
    return this.findAllUsersUsecase.findAllUsers();
  }

  @Get('users/:id')
  getUserById(@Param('id') id: number): Promise<User> {
    return this.findUserByIdUsecase.findUserById(id);
  }

  @Post('users')
  createUser(@Body() input: CreateUser): Promise<User> {
    return this.createUserUsecase.createUser(input);
  }

  @Delete('users/:id')
  deleteUserById(@Param('id') id: number): Promise<number> {
    return this.deleteUserUsecase.deleteUser(id);
  }

  @Put('users/:id')
  updateUserById(@Param('id') id: number, @Body() input: CreateUser): Promise<User> {
    return this.updateUserUsecase.updateUser(id, input);
  }

}
