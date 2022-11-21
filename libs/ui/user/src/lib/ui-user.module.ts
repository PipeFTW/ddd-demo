import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './features/user/user.component';
import {SharedComponentsModule} from '@ddd-demo/ui/shared';
import {NzNotificationModule} from 'ng-zorro-antd/notification';

@NgModule({
  imports: [CommonModule, SharedComponentsModule, NzNotificationModule],
    declarations: [
        UserComponent
    ],
    exports: [
        UserComponent
    ]
})
export class UiUserModule {}
