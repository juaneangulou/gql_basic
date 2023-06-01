import { IResolvers } from '@graphql-tools/utils';
import axios from 'axios';

const CustomerResolver: IResolvers = {
    Query: {
       async getCustomers() {
            try {
                const response = await axios.get('http://localhost:32770/api/Customers');
                return response.data;
              } catch (error) {
                console.error('Error fetching customers:', error);
                return [];
              }
        }
    }
}

export default CustomerResolver;