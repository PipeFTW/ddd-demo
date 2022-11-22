import {CreateUser, User} from '@ddd-demo/api/domain';
import {UserInput, UserOutput} from '../../generated/graphql';
import {Injectable} from '@nestjs/common';

@Injectable()
export class UserService {
  convertUserToUserOutput(user: User): UserOutput {
    return {
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      created: user.created.toISOString(),
      updated: user.updated.toISOString(),
    };
  }

  convertUserInputToCreateUser(input: UserInput): CreateUser {
    return new CreateUser(input.name, input.surname, input.email);
  }
}
