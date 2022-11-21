import { ColDef } from 'ag-grid-community';
import { formatInTimeZone } from 'date-fns-tz';

export const columnDefinitionConstants: ColDef[] = [
  {
    field: 'rowActionsDropdown',
    headerName: '',
    pinned: 'left',
    maxWidth: 50,
  },
  { field: 'id', headerName: 'ID', sortable: true, filter: 'agNumberColumnFilter', floatingFilter: true },
  { field: 'name', headerName: 'Name', sortable: true, filter: 'agTextColumnFilter', floatingFilter: true },
  { field: 'surname', headerName: 'Nachname', sortable: true, filter: 'agTextColumnFilter', floatingFilter: true },
  { field: 'email', headerName: 'E-Mail', sortable: true, filter: 'agTextColumnFilter', floatingFilter: true },
  {
    field: 'created',
    headerName: 'Erstellt am',
    sortable: true,
    flex: 1,
    valueFormatter: (params) => {
      if (!params.value) {
        return '';
      }
      return formatInTimeZone(params.value, 'Europe/Vienna', 'yyyy-MM-dd HH:mm:ss');
    },
  },
  {
    field: 'updated',
    headerName: 'Zuletzt aktualisiert',
    sortable: true,
    flex: 1,
    valueFormatter: (params) => {
      if (!params.value) {
        return '';
      }
      return formatInTimeZone(params.value, 'Europe/Vienna', 'yyyy-MM-dd HH:mm:ss');
    },
  },
];
