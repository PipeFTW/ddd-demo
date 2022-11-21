import {IFindAllUsers, IUserRepository, User} from '@ddd-demo/api/domain';

export class FindAllUsersUsecase implements IFindAllUsers {
  constructor(private readonly userRepository: IUserRepository) {
  }

  findAllUsers(): Promise<User[]> {
    return this.userRepository.getAll();
  }
}
