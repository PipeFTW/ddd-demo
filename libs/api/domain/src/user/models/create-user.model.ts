export class CreateUser {
  constructor(
    private readonly _name: string,
    private readonly _surname: string,
    private readonly _email: string
  ) {
  }

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  get email(): string {
    return this._email;
  }
}
