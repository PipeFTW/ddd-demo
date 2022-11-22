import {Controller, Get, Inject} from '@nestjs/common';

import {AppService} from './app.service';
import {FindAllUsersUsecase, User} from '@ddd-demo/api/domain';
import {UserUsecase} from '@ddd-demo/api/application';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject(UserUsecase.FIND_ALL_USERS_USECASE)
    private readonly findAllUsersUsecase: FindAllUsersUsecase,
  ) {}

  @Get('users')
  getUsers(): Promise<User[]> {
    return this.findAllUsersUsecase.findAllUsers();
  }
}
