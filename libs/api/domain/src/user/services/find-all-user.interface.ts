import {User} from '../models';

export interface IFindAllUsers {
  findAllUsers(): Promise<User[]>;
}
