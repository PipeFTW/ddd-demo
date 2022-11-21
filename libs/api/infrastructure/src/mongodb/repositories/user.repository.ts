import {CreateUser, IUserRepository, User} from '@ddd-demo/api/domain';
import {UserDto} from '../dtos/user.dto';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {UserDocument} from '../schema/user.schema';

export class UserRepository implements IUserRepository {
  constructor(@InjectModel(UserDto.name) private readonly userModel: Model<UserDocument>) {
  }

  save(input: CreateUser): Promise<User> {
    const userDto = this.convertCreateUserToUserDto(input);
    return this.userModel.create(userDto).then((userDocument: UserDocument) => this.convertUserDtoToUser(userDocument.id, userDocument));
  }

  delete(id: number): Promise<number> {
    throw new Error('Not implemented');
  }

  getAll(): Promise<User[]> {
    return this.userModel.find().then((userDocuments: UserDocument[]) => userDocuments.map((userDocument: UserDocument) => this.convertUserDtoToUser(userDocument.id, userDocument)));
  }

  getById(id: number): Promise<User> {
    return this.userModel.findOne({ id: id }).then((userDocument: UserDocument) => this.convertUserDtoToUser(userDocument.id, userDocument));
  }

  update(id: number, input: CreateUser): Promise<User> {
    throw new Error('Not implemented');
  }

  private convertUserDtoToUser(id: number, userDto: UserDto): User {
    throw new Error('Not implemented');
  }

  private convertCreateUserToUserDto(input: CreateUser): UserDto {
    return {
      name: input.name,
      surname: input.surname,
      email: input.email,
    }
  }
}
