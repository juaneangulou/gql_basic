import { IResolvers } from "@graphql-tools/utils";
const CartoonDataSource = [{ "id": "1", "name": "Mickey Mouse", "city": "Los Angeles", "country": "United States", "dateOfBirth": "1928-11-18", "yearOfCreation": 1928 }, { "id": "2", "name": "Bugs Bunny", "city": "Hollywood", "country": "United States", "dateOfBirth": "1940-07-27", "yearOfCreation": 1940 }];
const cartoonsResolver: IResolvers = {
    Query: {
        hello: () => 'Hello world!',
        getCartoons: () => CartoonDataSource
    },
    Mutation: {
       
    }
}

export default cartoonsResolver;