import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Inject} from '@nestjs/common';
import {CREATE_USER_USECASE, DELETE_USER_USECASE, FIND_ALL_USERS_USECASE, FIND_USER_BY_ID_USECASE, UPDATE_USER_USECASE} from '@ddd-demo/api/application';
import {CreateUserUsecase, DeleteUserUsecase, FindAllUsersUsecase, FindUserByIdUsecase, UpdateUserUsecase, User} from '@ddd-demo/api/domain';
import {UserService} from './user.service';
import {UserInput, UserOutput} from '../../generated/graphql';

@Resolver('user')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    @Inject(CREATE_USER_USECASE)
    private readonly createUserUsecase: CreateUserUsecase,
    @Inject(UPDATE_USER_USECASE)
    private readonly updateUserUsecase: UpdateUserUsecase,
    @Inject(DELETE_USER_USECASE)
    private readonly deleteUserUsecase: DeleteUserUsecase,
    @Inject(FIND_USER_BY_ID_USECASE)
    private readonly findUserByIdUsecase: FindUserByIdUsecase,
    @Inject(FIND_ALL_USERS_USECASE)
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

