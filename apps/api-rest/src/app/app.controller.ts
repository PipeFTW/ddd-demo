import {Controller, Get, Inject, Param} from '@nestjs/common';
import {AppService} from './app.service';
import {FindAllUsersUsecase, FindUserByIdUsecase, User} from '@ddd-demo/api/domain';
import {UserUsecase} from '@ddd-demo/api/application';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(UserUsecase.FIND_ALL_USERS_USECASE)
    private readonly findAllUsersUsecase: FindAllUsersUsecase,
    @Inject(UserUsecase.FIND_USER_BY_ID_USECASE)
    private readonly findUserByIdUsecase: FindUserByIdUsecase,
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

}
