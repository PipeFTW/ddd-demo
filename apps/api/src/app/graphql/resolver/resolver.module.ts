import {Module} from '@nestjs/common';
import {UsecaseModule} from '@ddd-demo/api/application';
import {UserResolver} from './user/user.resolver';
import { UserService } from './user/user.service';

@Module({
  imports: [UsecaseModule.register()],
  providers: [UserResolver, UserService],
})
export class ResolverModule {
}
