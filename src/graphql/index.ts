import {GraphQLSchema} from 'graphql';
import {makeExecutableSchema} from  '@graphql-tools/schema';
import {mergeTypeDefs} from '@graphql-tools/merge';
import 'graphql-import-node';

import cartoonsSchema from './schemas/cartoons.graphql';
import peopleSchema from './schemas/people.graphql';
import customerSchema from './schemas/customers.graphql';

import peopleResolver from './resolvers/peopleResolver';
import cartoonResolver from './resolvers/cartoonResolver';
import customerResolver from './resolvers/customerResolver';

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([cartoonsSchema, peopleSchema,customerSchema ]),
    resolvers:[cartoonResolver, peopleResolver,customerResolver]
});