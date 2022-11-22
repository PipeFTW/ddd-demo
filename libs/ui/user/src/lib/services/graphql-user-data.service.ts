import {Injectable} from '@angular/core';
import {CreateUserGQL, DeleteUserGQL, GetAllUsersGQL, GetAllUsersQuery, UserInput, UserOutput} from '@ddd-demo/ui/shared';
import {ApolloQueryResult} from '@apollo/client';
import {filter, map, Observable} from 'rxjs';
import {User} from '../domain/user.model';
import {CreateUser} from '../domain/create-user.model';
import {IUserDataService} from '../domain/services';

@Injectable()
export class GraphQLUserDataService implements IUserDataService {

  constructor(
    private readonly getAllUsersGQL: GetAllUsersGQL,
    private readonly createUserGQL: CreateUserGQL,
    private readonly deleteUserGQL: DeleteUserGQL
  ) {
  }

  fetchAllUsers(): Observable<User[]> {
    return this.getAllUsersGQL.fetch({}, {fetchPolicy: 'network-only'}).pipe(
      filter((result: ApolloQueryResult<GetAllUsersQuery>) => result && result.data && !!result.data.users),
      map((result: ApolloQueryResult<GetAllUsersQuery>) => result.data.users as UserOutput[]),
      map((users: UserOutput[]) => users.map((user: UserOutput) => this.convertUserOutputToUser(user))));
  }

  createUser(input: CreateUser): Observable<User> {
    return this.createUserGQL.mutate({input: this.convertCreateUserToUserInput(input)}).pipe(
      filter((result) => result && !!result.data && !!result.data.createUser),
      map((result) => result.data?.createUser as UserOutput),
      map((user: UserOutput) => this.convertUserOutputToUser(user))
    );
  }

  deleteUser(id: number): Observable<number> {
    return this.deleteUserGQL.mutate({id}).pipe(
      filter((result) => result && !!result.data && !!result.data.deleteUser),
      map((result) => result.data?.deleteUser as number)
    );
  }

  private convertUserOutputToUser(user: UserOutput) {
    return new User(
      user.id,
      user.name,
      user.surname,
      user.email,
      new Date(user.created),
      new Date(user.updated));
  }

  private convertCreateUserToUserInput(user: CreateUser): UserInput {
    return {
      name: user.name,
      surname: user.surname,
      email: user.email
    };
  }
}
