import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory
  .generate({
    typePaths: ['libs/shared/schema/**/*.graphqls'],
    path: join(process.cwd(), 'libs/api/application/src/graphql/generated/graphql.ts'),
    outputAs: 'class',
    watch: false,
  })
  .then(() => console.log('Generating GraphQL definitions done'));
