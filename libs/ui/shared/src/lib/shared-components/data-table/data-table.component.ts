import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ColDef, ColumnMovedEvent, ColumnResizedEvent, ColumnVisibleEvent, GridOptions, GridReadyEvent, IDatasource, RowClassRules, RowClickedEvent} from 'ag-grid-community';

@Component({
  selector: 'ddd-demo-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  @Input()
  headerHeight = 30;
  @Input()
  rowHeight = 35;
  @Input()
  columnDefs: ColDef[] = [];
  @Input()
  rowModel: 'clientSide' | 'infinite' | 'viewport' | 'serverSide' | undefined = 'clientSide';
  @Input()
  cacheBlockSize = 100;
  @Input()
  dataSource?: IDatasource;
  @Input()
  overlayLoadingTemplate = '<span class="ag-overlay-loading-center">Lade Daten ...</span>';
  @Input()
  overlayNoRowsTemplate = '<span class="ag-overlay-loading-center">Keine Daten vorhanden</span>';
  @Input()
  defaultColumnDefinition: ColDef = {
    suppressMovable: true,
    resizable: true,
    sortable: false,
  };
  @Input()
  rowClassRules!: RowClassRules;

  @Input()
  data: any[] = [];

  @Input()
  gridOptions: GridOptions = {
    getRowStyle: (params: any) => {
      if (params.node.rowIndex % 2 === 0) {
        return {background: '#ffffff'};
      }
      return {background: '#f9f9f9'};
    },
    onGridReady: (event: any) => {
      event.columnApi.autoSizeColumns();
    },
    suppressCellFocus: true,
    enableCellTextSelection: true,
    ensureDomOrder: true,
    suppressRowClickSelection: true,
  };

  @Input()
  rowSelection: 'single' | 'multiple' | undefined = 'single';

  @Output()
  private readonly gridReady: EventEmitter<GridReadyEvent> = new EventEmitter<GridReadyEvent>();
  @Output()
  private readonly rowClicked: EventEmitter<RowClickedEvent> = new EventEmitter<RowClickedEvent>();

  @Output()
  private readonly columnResized: EventEmitter<ColumnResizedEvent> = new EventEmitter<ColumnResizedEvent>();
  @Output()
  private readonly columnMoved: EventEmitter<ColumnMovedEvent> = new EventEmitter<ColumnMovedEvent>();
  @Output()
  private readonly columnVisibilityChanged: EventEmitter<ColumnVisibleEvent> = new EventEmitter<ColumnVisibleEvent>();

  whenGridReady(gridReadyEvent: GridReadyEvent) {
    this.gridReady.emit(gridReadyEvent);
  }

  whenRowClicked(rowClickedEvent: RowClickedEvent) {
    this.rowClicked.emit(rowClickedEvent);
  }

  whenColumnResized(columnResizedEvent: ColumnResizedEvent) {
    this.columnResized.emit(columnResizedEvent);
  }

  whenColumnMoved(columnMovedEvent: ColumnMovedEvent) {
    this.columnMoved.emit(columnMovedEvent);
  }

  whenColumnVisibleChanged(columnVisibleEvent: ColumnVisibleEvent) {
    this.columnVisibilityChanged.emit(columnVisibleEvent);
  }
}
