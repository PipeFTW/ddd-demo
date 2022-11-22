import {Observable} from 'rxjs';
import {User} from '../user.model';
import {CreateUser} from '../create-user.model';


export abstract class IUserDataService {
  abstract fetchAllUsers(): Observable<User[]>;
  abstract createUser(input: CreateUser): Observable<User>;
  abstract deleteUser(id: number): Observable<number>;
}
