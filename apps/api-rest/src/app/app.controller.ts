import {Controller, Get, Inject} from '@nestjs/common';

import {AppService} from './app.service';
import {FindAllUsersUsecase, UsecaseModule} from '@ddd-demo/api/application';
import {User} from '@ddd-demo/api/domain';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject(UsecaseModule.FIND_ALL_USERS_USECASE)
    private readonly findAllUsersUsecase: FindAllUsersUsecase,
  ) {}

  @Get('users')
  getUsers(): Promise<User[]> {
    return this.findAllUsersUsecase.findAllUsers();
  }
}
