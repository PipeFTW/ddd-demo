import {IFindUserById, IUserRepository, User} from '@ddd-demo/api/domain';

export class FindUserByIdUsecase implements IFindUserById {
  constructor(private readonly userRepository: IUserRepository) {
  }

  findUserById(id: number): Promise<User> {
    return this.userRepository.getById(id);
  }
}
