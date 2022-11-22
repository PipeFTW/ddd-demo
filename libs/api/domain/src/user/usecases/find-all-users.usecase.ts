import {IUserRepository} from '../repositories';
import {User} from '../models';

export class FindAllUsersUsecase {
  constructor(private readonly userRepository: IUserRepository) {
  }

  findAllUsers(): Promise<User[]> {
    return this.userRepository.getAll();
  }
}
