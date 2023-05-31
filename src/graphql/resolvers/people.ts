import { IResolvers } from '@graphql-tools/utils';
import { peopleDataSource } from '../../data/peopledata';

const peopleResolver: IResolvers = {
    Query: {
        getPeople: () => peopleDataSource,
        getPersonByName: (parent, { name }) => {
            return peopleDataSource.filter(peopleDataSource => peopleDataSource.name.toLowerCase().includes(name.toLowerCase()));
        }
    },
    Mutation: {
        createPerson: (parent, { input }) => {
            const newPerson = {
                id: String(peopleDataSource.length + 1),
                ...input
            };
            peopleDataSource.push(newPerson);
            return newPerson;
        },
        updatePerson: (parent, { id, input }) => {
            const personIndex = peopleDataSource.findIndex(person => person.id === id);
            if (personIndex !== -1) {
                const updatedPerson = {
                    id,
                    ...input
                };
                peopleDataSource[personIndex] = updatedPerson;
                return updatedPerson;
            }
            throw new Error("Person not found");
        },
        deletePerson: (parent, { id }) => {
            const personIndex = peopleDataSource.findIndex(person => person.id === id);
            if (personIndex !== -1) {
                peopleDataSource.splice(personIndex, 1);
                return true;
            }
            throw new Error("Person not found");
        }
    }
}



export default peopleResolver;