import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './features/user/user.component';
import {SharedComponentsModule} from '@ddd-demo/ui/shared';
import {NzNotificationModule} from 'ng-zorro-antd/notification';
import {IUserDataService} from './domain/services';
import {GraphQLUserDataService} from './services/graphql-user-data.service';

@NgModule({
  imports: [CommonModule, SharedComponentsModule, NzNotificationModule],
  declarations: [
    UserComponent
  ],
  exports: [
    UserComponent
  ],
  providers: [
    {
      provide: IUserDataService,
      useClass: GraphQLUserDataService
    }
  ]
})
export class UiUserModule {
}
