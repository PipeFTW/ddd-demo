export class DropdownAction {
  constructor(public _label: string, public _value: string, public _icon: string, public _callback: (event: any) => void) {}

  get label(): string {
    return this._label;
  }

  get value(): string {
    return this._value;
  }

  get icon(): string {
    return this._icon;
  }

  get callback(): (event: any) => void {
    return this._callback;
  }
}
