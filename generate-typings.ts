import {GraphQLDefinitionsFactory} from '@nestjs/graphql';
import {join} from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory
  .generate({
    typePaths: ['libs/shared/schemas/**/*.graphqls'],
    path: join(process.cwd(), 'apps/api/src/app/graphql/generated/graphql.ts'),
    outputAs: 'class',
    watch: false,
  })
  .then(() => console.log('Generating GraphQL definitions done'));
