import {CreateUser, User} from '../models';

export interface ICreateUser {
  createUser(input: CreateUser): Promise<User>;
}
