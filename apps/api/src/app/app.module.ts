import {Module} from '@nestjs/common';
import {GraphqlModule} from './graphql/graphql.module';
import {ConfigProviderModule} from '@ddd-demo/api/application';

@Module({
  imports: [GraphqlModule, ConfigProviderModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
