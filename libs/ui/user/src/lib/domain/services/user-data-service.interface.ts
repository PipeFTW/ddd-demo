import {Observable} from 'rxjs';
import {CreateUser, User} from '../models';


export abstract class IUserDataService {
  abstract fetchAllUsers(): Observable<User[]>;
  abstract createUser(input: CreateUser): Observable<User>;
  abstract deleteUser(id: number): Observable<number>;
}
