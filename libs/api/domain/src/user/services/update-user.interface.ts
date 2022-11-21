import {CreateUser, User} from '../models';

export interface IUpdateUser {
  updateUser(id: number, input: CreateUser): Promise<User>;
}
