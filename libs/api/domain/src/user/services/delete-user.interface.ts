export interface IDeleteUser {
  deleteUser(id: number): Promise<number>;
}
