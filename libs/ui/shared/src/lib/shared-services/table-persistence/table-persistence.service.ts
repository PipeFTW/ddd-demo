import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community';

export interface ColumnEntity {
  name: string;
  width: number;
  hide: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TablePersistenceService {
  public storeColumns(tableKey: string, columnDefinitions: ColDef[]) {
    const columnEntities = columnDefinitions.map((columnDefinition) => {
      return {
        name: columnDefinition.field,
        width: columnDefinition.width,
        hide: !!columnDefinition.hide,
      } as ColumnEntity;
    });
    localStorage.setItem(tableKey, JSON.stringify(columnEntities));
  }

  public loadColumns(tableKey: string, defaultColumnConfiguration: ColDef[]): ColDef[] {
    const loadedColumns = localStorage.getItem(tableKey);
    if (loadedColumns) {
      const loadedColumnConfiguration = JSON.parse(loadedColumns) as ColumnEntity[];
      if (loadedColumnConfiguration && loadedColumnConfiguration.length > 0) {
        return this.matchAndEnrichColumnConfigurations(loadedColumnConfiguration, defaultColumnConfiguration);
      }
    }
    return defaultColumnConfiguration;
  }

  public deleteColumns(tableKey: string) {
    localStorage.removeItem(tableKey);
  }

  private matchAndEnrichColumnConfigurations(loadedColumnConfiguration: ColumnEntity[], defaultColumnConfiguration: ColDef[]) {
    //Copy original configuration because we do not want to change the original
    const defaultColumnConfigurationCopy = [...defaultColumnConfiguration];
    return loadedColumnConfiguration.map((loadedColumn) => {
      const foundDefaultColumn = defaultColumnConfigurationCopy.find((defaultColumn) => defaultColumn.field === loadedColumn.name);
      if (foundDefaultColumn) {
        defaultColumnConfigurationCopy.splice(defaultColumnConfigurationCopy.indexOf(foundDefaultColumn), 1);
        const enrichedColumnConfiguration: ColDef = Object.assign(foundDefaultColumn, {
          width: loadedColumn.width,
          hide: loadedColumn.hide,
          // maxWidth: loadedColumn.width,
          // minWidth: loadedColumn.width,
        });
        return enrichedColumnConfiguration;
      }
      // Because no column was found in the default list, return the default configuration element by element
      return defaultColumnConfigurationCopy.splice(0, 1)[0];
    });
  }
}
