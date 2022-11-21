import {Module} from '@nestjs/common';
import {UsecaseModule, UserService} from '@ddd-demo/api/application';
import {UserResolver} from './user.resolver';

@Module({
  imports: [UsecaseModule.register()],
  providers: [UserResolver, UserService],
})
export class ResolverModule {
}
