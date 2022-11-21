import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Action} from './action.model';
import {FilterDropdown} from '../filter-dropdown/filter-dropdown.type';

@Component({
  selector: 'ddd-demo-action-header',
  templateUrl: './action-header.component.html',
  styleUrls: ['./action-header.component.scss'],
})
export class ActionHeaderComponent {

  @Input()
  actions: Action[] = [];

  @Input()
  columnsDisplayFilterItems: FilterDropdown[] = [];

  @Input()
  enablePaginationCounter = false;

  @Input()
  loadedDataCount = 0;

  @Input()
  totalCount = 0;

  @Output()
  filterItemStateChanged: EventEmitter<FilterDropdown> = new EventEmitter<FilterDropdown>();

  whenItemStateChanged(filterDropdown: FilterDropdown) {
    this.filterItemStateChanged.emit(filterDropdown);
  }

  handleCallback(action: Action) {
    action.actionCallback();
  }
}
