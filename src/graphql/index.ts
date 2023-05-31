import {GraphQLSchema} from 'graphql';
import 'graphql-import-node';
import  cartoonsSchema from './schemas/cartoons.graphql';
import  peopleSchema from './schemas/people.graphql';
import { makeExecutableSchema, mergeSchemas } from '@graphql-tools/schema';
import mergeTypeDefs from 'graphql-tools-merge-typedefs';
import cartoonsResolver from './resolvers/cartoons';
import peopleResolver from './resolvers/people';

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([
        cartoonsSchema,
        peopleSchema
    ]),
    resolvers: [cartoonsResolver, peopleResolver]
});