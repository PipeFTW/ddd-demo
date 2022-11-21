import {CreateUser, ICreateUser, IUserRepository, User} from '@ddd-demo/api/domain';

export class CreateUserUsecase implements ICreateUser {
  constructor(private readonly userRepository: IUserRepository) {
  }

  createUser(input: CreateUser): Promise<User> {
    return this.userRepository.save(input);
  }
}
