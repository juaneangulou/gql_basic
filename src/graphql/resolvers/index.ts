import { IResolvers } from '@graphql-tools/utils';
import GMR from 'graphql-merge-resolvers';
import cartoons from './cartoons';
import people from './people';

const resolver: any = GMR.merge({
    cartoons,
    people
})



export default resolver;