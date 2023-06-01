import {GraphQLSchema} from 'graphql';
import 'graphql-import-node';
import  cartoonsSchema from './schemas/cartoons.graphql';
import  peopleSchema from './schemas/people.graphql';
import  skillSchema from './schemas/skill.graphql';
import  employeeSchema from './schemas/employee.graphql';
import  userSchema from './schemas/users.graphql';
import  customerSchema from './schemas/customers.graphql';
import { makeExecutableSchema, mergeSchemas } from '@graphql-tools/schema';
import mergeTypeDefs from 'graphql-tools-merge-typedefs';
import cartoonsResolver from './resolvers/cartoons';
import peopleResolver from './resolvers/people';
import employeeResolver from './resolvers/employee';
import skillResolver from './resolvers/skill';
import userResolver from './resolvers/user';
import customerResolver from './resolvers/customer';

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([
        cartoonsSchema,
        peopleSchema,
        employeeSchema,
        skillSchema,
        userSchema, customerSchema
           ]),
    resolvers: [cartoonsResolver, peopleResolver, employeeResolver,skillResolver, userResolver, customerResolver]
});