import {GraphQLSchema} from 'graphql';
import {makeExecutableSchema} from  '@graphql-tools/schema';
import {mergeTypeDefs} from '@graphql-tools/merge';
import 'graphql-import-node';

import cartoonsSchema from './schemas/cartoons.graphql';
import peopleSchema from './schemas/people.graphql';
import peopleResolver from './resolvers/peopleResolver';
import cartoonResolver from './resolvers/cartoonResolver';

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([cartoonsSchema, peopleSchema]),
    resolvers:[cartoonResolver, peopleResolver]
});