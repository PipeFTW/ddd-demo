import {User} from '../models';

export interface IFindUserById {
  findUserById(id: number): Promise<User>;
}
