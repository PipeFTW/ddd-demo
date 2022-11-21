import {CreateUser, IUserRepository, User} from '@ddd-demo/api/domain';
import {UserEntity} from '../entities';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {
  }

  delete(id: number): Promise<number> {
    return this.userRepository.delete(id).then((result: any) => {
      if (result.affected === 1) {
        return result.affected;
      }

      throw new Error('User not found');
    });
  }

  getAll(): Promise<User[]> {
    return this.userRepository.find().then((userEntities: UserEntity[]) => userEntities.map((userEntity: UserEntity) => this.convertUserEntityToUser(userEntity)));
  }

  getById(id: number): Promise<User> {
    return this.userRepository.findOneByOrFail({id: id}).then((userEntity: UserEntity) => this.convertUserEntityToUser(userEntity));
  }

  save(input: CreateUser): Promise<User> {
    return this.userRepository.save(input).then((userEntity: UserEntity) => this.convertUserEntityToUser(userEntity));
  }

  update(id: number, input: CreateUser): Promise<User> {
    return this.userRepository.findOneByOrFail({id: id}).then((userEntity: UserEntity) => {
      userEntity.name = input.name;
      userEntity.surname = input.surname;
      userEntity.email = input.email;
      userEntity.updated = new Date();
      return this.userRepository.save(userEntity).then((userEntity: UserEntity) => this.convertUserEntityToUser(userEntity));
    })
  }

  private convertUserEntityToUser(userEntity: UserEntity): User {
    return new User(userEntity.id, userEntity.name, userEntity.surname, userEntity.email, userEntity.created, userEntity.updated);
  }
}
