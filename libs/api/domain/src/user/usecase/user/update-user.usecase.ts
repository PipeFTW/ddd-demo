import {CreateUser, User} from '../../models';
import {IUserRepository} from '../../repositories';


export class UpdateUserUsecase {
  constructor(private readonly userRepository: IUserRepository) {
  }

  updateUser(id: number, input: CreateUser): Promise<User> {
    return this.userRepository.update(id, input);
  }
}
