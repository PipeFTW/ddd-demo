export class Action {
  constructor(private readonly _actionName: string, private readonly _actionIcon: string, private readonly _actionCallback: (params: any) => void) {}

  get actionName(): string {
    return this._actionName;
  }

  get actionIcon(): string {
    return this._actionIcon;
  }

  get actionCallback(): (params?: any) => void {
    return this._actionCallback;
  }
}
