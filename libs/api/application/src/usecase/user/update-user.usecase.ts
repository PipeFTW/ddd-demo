import {CreateUser, IUpdateUser, IUserRepository, User} from '@ddd-demo/api/domain';

export class UpdateUserUsecase implements IUpdateUser {
  constructor(private readonly userRepository: IUserRepository) {
  }

  updateUser(id: number, input: CreateUser): Promise<User> {
    return this.userRepository.update(id, input);
  }
}
