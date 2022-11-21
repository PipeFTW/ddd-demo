import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Inject} from '@nestjs/common';
import {CreateUserUsecase, DeleteUserUsecase, FindAllUsersUsecase, FindUserByIdUsecase, UpdateUserUsecase, UsecaseModule, UserInput, UserOutput, UserService} from '@ddd-demo/api/application';
import {User} from '@ddd-demo/api/domain';

@Resolver('user')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    @Inject(UsecaseModule.CREATE_USER_USECASE)
    private readonly createUserUsecase: CreateUserUsecase,
    @Inject(UsecaseModule.UPDATE_USER_USECASE)
    private readonly updateUserUsecase: UpdateUserUsecase,
    @Inject(UsecaseModule.DELETE_USER_USECASE)
    private readonly deleteUserUsecase: DeleteUserUsecase,
    @Inject(UsecaseModule.FIND_USER_BY_ID_USECASE)
    private readonly findUserByIdUsecase: FindUserByIdUsecase,
    @Inject(UsecaseModule.FIND_ALL_USERS_USECASE)
    private readonly findAllUsersUsecase: FindAllUsersUsecase,
  ) {
  }

  @Query('users')
  async users(): Promise<UserOutput[]> {
    return this.findAllUsersUsecase.findAllUsers().then((users: User[]) => users.map((user: User) => this.userService.convertUserToUserOutput(user)));
  }

  @Query('findUser')
  async findUser(
    @Args('id') id: number,
  ): Promise<UserOutput> {
    return this.findUserByIdUsecase.findUserById(id).then((user: User) => this.userService.convertUserToUserOutput(user));
  }

  @Mutation('createUser')
  async createUser(
    @Args('input') input: UserInput,
  ): Promise<UserOutput> {
    return this.createUserUsecase.createUser(this.userService.convertUserInputToCreateUser(input)).then((user: User) => this.userService.convertUserToUserOutput(user));
  }

  @Mutation('updateUser')
  async updateUser(
    @Args('id') id: number,
    @Args('input') input: UserInput,
  ): Promise<UserOutput> {
    return this.updateUserUsecase.updateUser(id, this.userService.convertUserInputToCreateUser(input)).then((user: User) => this.userService.convertUserToUserOutput(user));
  }

  @Mutation('deleteUser')
  async deleteUser(
    @Args('id') id: number,
  ): Promise<number> {
    return this.deleteUserUsecase.deleteUser(id);
  }
}

