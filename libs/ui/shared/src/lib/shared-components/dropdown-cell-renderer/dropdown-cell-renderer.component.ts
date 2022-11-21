import {Component} from '@angular/core';
import {DropdownAction} from './dropdown-action.model';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'ddd-demo-dropdown-cell-renderer',
  templateUrl: './dropdown-cell-renderer.component.html',
  styleUrls: ['./dropdown-cell-renderer.component.scss'],
})
export class DropdownCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  actions: DropdownAction[] = [];

  agInit(params: any) {
    this.params = params;
    if (this.params.actions.length > 0) {
      this.actions = this.params.actions;
    }
  }

  refresh(params: ICellRendererParams<any>): boolean {
    return false;
  }

  confirm(action: any) {
    action.callback();
  }
}
