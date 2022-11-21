import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionHeaderComponent } from './action-header/action-header.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { FilterDropdownComponent } from './filter-dropdown/filter-dropdown.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DropdownCellRendererComponent } from './dropdown-cell-renderer/dropdown-cell-renderer.component';

@NgModule({
  declarations: [ActionHeaderComponent, DataTableComponent, FilterDropdownComponent, DropdownCellRendererComponent],
  imports: [CommonModule, AgGridModule, NzDropDownModule, NzIconModule, NzCheckboxModule, NzButtonModule],
  exports: [ActionHeaderComponent, DataTableComponent],
})
export class SharedComponentsModule {}
