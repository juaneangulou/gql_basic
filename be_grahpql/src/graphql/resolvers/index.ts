import { IResolvers } from '@graphql-tools/utils';
import GMR from 'graphql-merge-resolvers';
import cartoons from './cartoons';
import people from './people';
import employee from './employee';

const resolver: any = GMR.merge({
    cartoons,
    people,
    employee
})



export default resolver;