import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterDropdown } from './filter-dropdown.type';

@Component({
  selector: 'ddd-demo-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss'],
})
export class FilterDropdownComponent {
  @Input()
  items: FilterDropdown[] = [];

  @Output()
  itemStateChanged: EventEmitter<FilterDropdown> = new EventEmitter<FilterDropdown>();

  whenCheckboxClicked(filter: FilterDropdown, checkboxState: boolean) {
    const value = filter.value;
    const label = filter.label;
    this.itemStateChanged.emit({ label, value, enabled: checkboxState });
  }
}
