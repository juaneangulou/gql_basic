import {IResolvers} from '@graphql-tools/utils';
import { peopleDataSource } from '../../data/peopledata';

const peopleResolver: IResolvers = {
    Query: {        
        getPeople(){
            return peopleDataSource;
        }
    }
}



export default peopleResolver;