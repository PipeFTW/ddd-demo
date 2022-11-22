import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Inject} from '@nestjs/common';
import {UserUsecase} from '@ddd-demo/api/application';
import {CreateUserUsecase, DeleteUserUsecase, FindAllUsersUsecase, FindUserByIdUsecase, UpdateUserUsecase, User} from '@ddd-demo/api/domain';
import {UserService} from './user.service';
import {UserInput, UserOutput} from '../../generated/graphql';

@Resolver('user')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    @Inject(UserUsecase.CREATE_USER_USECASE)
    private readonly createUserUsecase: CreateUserUsecase,
    @Inject(UserUsecase.UPDATE_USER_USECASE)
    private readonly updateUserUsecase: UpdateUserUsecase,
    @Inject(UserUsecase.DELETE_USER_USECASE)
    private readonly deleteUserUsecase: DeleteUserUsecase,
    @Inject(UserUsecase.FIND_USER_BY_ID_USECASE)
    private readonly findUserByIdUsecase: FindUserByIdUsecase,
    @Inject(UserUsecase.FIND_ALL_USERS_USECASE)
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

