import {GraphQLSchema} from 'graphql';
import {makeExecutableSchema} from  '@graphql-tools/schema';
import {mergeTypeDefs} from '@graphql-tools/merge';
import 'graphql-import-node';

import cartoonsSchema from './schemas/cartoons.graphql';
import peopleSchema from './schemas/people.graphql';
import customerSchema from './schemas/customers.graphql';
import skillsSchema from './schemas/skills.graphql';
import employeeSchema from './schemas/employee.graphql';

import peopleResolver from './resolvers/peopleResolver';
import cartoonResolver from './resolvers/cartoonResolver';
import customerResolver from './resolvers/customerResolver';
import skillResolver from './resolvers/skillsResolver';
import employeeResolver from './resolvers/employeeResolver';

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([cartoonsSchema, peopleSchema,customerSchema, skillsSchema, employeeSchema ]),
    resolvers:[cartoonResolver, peopleResolver,customerResolver, skillResolver, employeeResolver]
});