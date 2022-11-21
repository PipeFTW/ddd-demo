import {Module} from '@nestjs/common';
import {ResolverModule} from './resolver/resolver.module';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {GraphqlConfigFactoryService} from '@ddd-demo/api/application';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [GraphqlModule],
      useClass: GraphqlConfigFactoryService
    }),
    ResolverModule
  ],
  providers: [],
})
export class GraphqlModule {
}
