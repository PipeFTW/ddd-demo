import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Config} from './app-config.model';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  config: Config | undefined;

  constructor(private httpClient: HttpClient) {}

  loadConfig() {
    return this.httpClient.get<Config>('assets/config.json').pipe(
      tap((response) => {
        console.log('response: ', response);
        this.config = response;
      })
    );
  }
}

