import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ApolloConfigurationModule} from './apollo-configuration/apollo-configuration.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ApolloConfigurationModule, UserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
