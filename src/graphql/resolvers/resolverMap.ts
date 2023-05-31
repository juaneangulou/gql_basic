import {IResolvers} from '@graphql-tools/utils';
import { CartoonDataSource } from '../../datasource';

const resolver: IResolvers = {
    Query: {
        hello(){
            return "Hello World!";
        },
        getCartoons(){
            return CartoonDataSource;
        }
    }
}



export default resolver;