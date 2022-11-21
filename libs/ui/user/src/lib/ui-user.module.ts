import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './features/user/user.component';
import {SharedComponentsModule} from '@ddd-demo/ui/shared';

@NgModule({
  imports: [CommonModule, SharedComponentsModule],
    declarations: [
        UserComponent
    ],
    exports: [
        UserComponent
    ]
})
export class UiUserModule {}
