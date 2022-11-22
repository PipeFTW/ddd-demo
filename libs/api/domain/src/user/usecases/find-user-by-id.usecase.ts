import {IUserRepository} from '../repositories';
import {User} from '../models';


export class FindUserByIdUsecase {
  constructor(private readonly userRepository: IUserRepository) {
  }

  findUserById(id: number): Promise<User> {
    return this.userRepository.getById(id);
  }
}
