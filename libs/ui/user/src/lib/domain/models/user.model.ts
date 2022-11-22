export class User {
  constructor(
    private readonly _id: number,
    private readonly _name: string,
    private readonly _surname: string,
    private readonly _email: string,
    private readonly _created: Date,
    private readonly _updated: Date) {}

  get id(): number {
    return this._id;
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

  get created(): Date {
    return this._created;
  }

  get updated(): Date {
    return this._updated;
  }
}
