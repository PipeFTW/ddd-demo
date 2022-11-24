import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedComponentsModule} from '@ddd-demo/ui/shared';
import {NzNotificationModule} from 'ng-zorro-antd/notification';
import {CreateUserFormComponent, GraphQLUserDataService, IUserDataService} from '@ddd-demo/ui/user';
import {UserComponent} from './user.component';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    NzNotificationModule,
    CreateUserFormComponent
  ],
  providers: [
    {
      provide: IUserDataService,
      useClass: GraphQLUserDataService
    }
  ],
  exports: [
    UserComponent,
  ]
})
export class UserModule {
}
