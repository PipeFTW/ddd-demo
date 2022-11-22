import {IUserRepository} from '../../repositories';
import {CreateUser, User} from '../../models';


export class CreateUserUsecase {
  constructor(private readonly userRepository: IUserRepository) {
  }

  createUser(input: CreateUser): Promise<User> {
    return this.userRepository.save(input);
  }
}
