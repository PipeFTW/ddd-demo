import {IDeleteUser, IUserRepository} from '@ddd-demo/api/domain';

export class DeleteUserUsecase implements IDeleteUser {
  constructor(private readonly userRepository: IUserRepository) {
  }

  deleteUser(id: number): Promise<number> {
    return this.userRepository.delete(id);
  }
}
