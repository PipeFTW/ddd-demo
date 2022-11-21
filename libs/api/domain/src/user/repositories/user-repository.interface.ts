import {CreateUser, User} from '../models';

export interface IUserRepository {
  save(input: CreateUser): Promise<User>;
  getAll(): Promise<User[]>;
  getById(id: number): Promise<User>;
  delete(id: number): Promise<number>;
  update(id: number, input: CreateUser): Promise<User>;
}
