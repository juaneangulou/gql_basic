import { IResolvers } from "@graphql-tools/utils";
import axios from "axios";
const customersResolver: IResolvers = {
    Query: {
        getCustomers: async () => {
            try{
                const customers = await axios.get('http://localhost:32770/api/Customers');
                return customers.data;

            }catch(error){
                console.log(error);
                console.log('Error fetching customers: ', error);
              throw error;
            }
            
        }
    }
}

export default customersResolver;