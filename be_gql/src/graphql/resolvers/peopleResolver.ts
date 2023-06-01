import { IResolvers } from "@graphql-tools/utils";
const PeopleDataSource = [] as any[];
const peopleResolver: IResolvers = {
    Query: {
        getPeople: () => PeopleDataSource
    },
    Mutation: {
        createPerson: (parent, args, context) => {
            const newPerson = {
                _id: String(PeopleDataSource.length + 1),
                ...args.input
            };
            PeopleDataSource.push(newPerson);
            return 'Person created';
        },
        updatePerson: (parent, args, context) => {
            const { _id, input } = args;
            const personIndex = PeopleDataSource.findIndex((person) => person._id === _id);
            if (personIndex === -1) throw new Error('Person not found');

            const updatedPerson = {
                _id,
                ...input
            };
            PeopleDataSource[personIndex] = updatedPerson;
            return 'Person updated';
        },
        deletePerson: (parent, args, context) => {
            const { _id, input } = args;
            const personIndex = PeopleDataSource.findIndex((person) => person._id === _id);
            if (personIndex === -1) throw new Error('Person not found');

            PeopleDataSource.splice(personIndex, 1);
            return 'Person removed';
        }
    }
}

export default peopleResolver;