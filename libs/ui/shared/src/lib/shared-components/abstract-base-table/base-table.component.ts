import { ApplyColumnStateParams, ColDef, ColumnApi, GridApi, GridReadyEvent, SortModelItem } from 'ag-grid-community';
import {TableStorageService} from '../../shared-services';
import {FilterDropdown} from '../filter-dropdown/filter-dropdown.type';
import {DropdownAction} from '../dropdown-cell-renderer/dropdown-action.model';
import {DropdownCellRendererComponent} from '../dropdown-cell-renderer/dropdown-cell-renderer.component';

export abstract class BaseTableComponent<T> {
  columnDefs: ColDef[] = [];
  columnsDisplayFilterItems: FilterDropdown[] = [];
  collapsePanelState = true;

  private readonly ignoredColumns = ['rowActions', 'rowActionsDropdown', 'status'];

  protected gridApi!: GridApi;
  protected gridColumnApi!: ColumnApi;

  protected TABLE_KEY = 'NotSet';
  protected sortModel: SortModelItem[] = [];

  protected constructor(protected readonly tablePersistenceService: TableStorageService) {}

  protected onActionClick(rowData: T) {
    console.log('BaseTableModule onActionClick');
  }

  protected setDefaultColumnDefinitions(defs: ColDef[], actions: DropdownAction[] = []) {
    const defaultColumnDefinitionConstants = defs.map((c) => {
      c.suppressMovable = false;
      if (c.field === 'rowActionsDropdown') {
        c.cellRenderer = DropdownCellRendererComponent;
        c.cellRendererParams = {
          actions: actions,
        };
      }
      return c;
    });

    const loadedColumnConfiguration = this.tablePersistenceService.loadColumns(this.TABLE_KEY, defaultColumnDefinitionConstants);
    if (loadedColumnConfiguration) {
      this.columnDefs = loadedColumnConfiguration;
      try {
        this.columnsDisplayFilterItems = this.prepareColumnDisplayFilterItems(loadedColumnConfiguration);
      } catch (e) {
        console.error(`Could not load saved table settings for ${this.TABLE_KEY}. Deleting the key and using default settings.`);
        this.columnDefs = defaultColumnDefinitionConstants;
        this.prepareColumnDisplayFilterItems(defs);
        this.tablePersistenceService.deleteColumns(this.TABLE_KEY);
      }
    } else {
      this.columnDefs = defaultColumnDefinitionConstants;
      this.columnsDisplayFilterItems = this.prepareColumnDisplayFilterItems(defs);
    }
  }

  protected setColumState(params: ApplyColumnStateParams): boolean {
    return this.gridColumnApi?.applyColumnState(params);
  }

  protected whenGridReady(gridReadyEvent: GridReadyEvent) {
    this.gridApi = gridReadyEvent.api;
    this.gridColumnApi = gridReadyEvent.columnApi;
  }

  protected getGridApiColumnDefinitions(): ColDef[] {
    if (this.gridApi?.getColumnDefs()) {
      return this.gridApi?.getColumnDefs() as ColDef[];
    }
    return [];
  }

  protected prepareColumnDisplayFilterItems(columnDefinitions: ColDef[]) {
    return columnDefinitions
      .filter((c) => !this.ignoredColumns.includes(c.field as string))
      .map(
        (column) =>
          ({
            label: column.headerName ? column.headerName : column.field ? this.capitalize(column.field) : column.field,
            value: column.field,
            enabled: !column.hide,
          } as FilterDropdown)
      );
  }

  storeColumns() {
    const columnDefs = this.getGridApiColumnDefinitions();
    if (columnDefs.length > 0) {
      this.tablePersistenceService.storeColumns(this.TABLE_KEY, columnDefs);
    }
  }

  whenColumnVisibilityChanged() {
    this.storeColumns();
    this.columnsDisplayFilterItems = this.prepareColumnDisplayFilterItems(this.getGridApiColumnDefinitions());
  }

  whenItemStateChanged(filterDropdown: FilterDropdown) {
    const columnDefs = this.getGridApiColumnDefinitions();
    if (columnDefs.length > 0) {
      this.columnDefs = columnDefs.map((c: ColDef) => {
        if (c.field === filterDropdown.value) {
          c.hide = !filterDropdown.enabled;
        }
        return c;
      });
      this.tablePersistenceService.storeColumns(this.TABLE_KEY, this.columnDefs);
    }
  }

  private capitalize(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
