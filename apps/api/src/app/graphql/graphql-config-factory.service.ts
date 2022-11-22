import { Injectable } from '@nestjs/common';
import {GqlOptionsFactory} from '@nestjs/graphql';
import {join} from 'path';
import {ConfigService} from '@nestjs/config';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';

@Injectable()
export class GraphqlConfigFactoryService implements GqlOptionsFactory {
  constructor(private configService: ConfigService) {}

  createGqlOptions(): ApolloDriverConfig {
    return {
      typePaths: ['libs/shared/schemas/**/*.graphqls'],
      definitions: {
        path: join(process.cwd(), 'apps/api/src/app/graphql/generated/graphql.ts'),
        outputAs: 'class',
      },
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': {
          path: '/graphql',
        },
      },
      context: (context) => {
        if (context?.extra?.request) {
          return {
            req: {
              ...context?.extra?.request,
              headers: {
                ...context?.extra?.request?.headers,
                ...context?.connectionParams,
              },
            },
          };
        }

        return { req: context?.req };
      },
      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
      },
      debug: this.configService.get('graphql.debug'),
      playground: this.configService.get('graphql.playground'),
    };
  }
}
