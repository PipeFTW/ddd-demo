import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
import {ApolloLink, InMemoryCache, split} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {getMainDefinition} from '@apollo/client/utilities';
import {environment} from '../../environments/environment';

export function createApollo(httpLink: HttpLink) {

  const http = ApolloLink.from([
    httpLink.create({
      uri: environment.graphql.uri
    }),
  ]);

  const link = split(
    ({query}) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    ApolloLink.from([]),
    http
  );

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
  imports: [ApolloModule],
})
export class ApolloConfigurationModule {
}
