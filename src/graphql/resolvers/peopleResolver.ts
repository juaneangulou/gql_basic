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
            const {_id, input} = args;
            console.log(args);
            console.log(_id, input);
            return 'Person updated';
        }
    }
}

export default peopleResolver;