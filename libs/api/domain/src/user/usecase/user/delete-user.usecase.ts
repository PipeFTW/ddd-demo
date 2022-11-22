import {IUserRepository} from '../../repositories';


export class DeleteUserUsecase {
  constructor(private readonly userRepository: IUserRepository) {
  }

  deleteUser(id: number): Promise<number> {
    return this.userRepository.delete(id);
  }
}
