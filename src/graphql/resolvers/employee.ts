import { IResolvers } from '@graphql-tools/utils';
import { peopleDataSource } from '../../data/peopledata';
import { Db, ObjectId } from 'mongodb';

const employeeResolver: IResolvers = {
    Query: {
        getEmployees: async (parent, args, context: Db) => {
            try {
                return await context.collection('employees').find().toArray() ?? [];
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        createEmployee: async (parent, args, context: Db) => {
            try {
                const reg_ex = new RegExp(args?.employee?.name, 'i');
                const employeeColl = await context.collection('employees').findOne({ name: reg_ex });
                console.log(employeeColl);
                if (employeeColl) throw new Error("Employee already exists");

                await context.collection('employees').insertOne(args.employee);
                return "Employee created successfully";
            } catch (error) {
                console.log(error);
                return error;
            }
        },
        updateEmployee: async (parent, args, context: Db) => {
            try {
                const { input } = args;
                const employeeColl = await context.collection('employees').findOne({ _id: new ObjectId(args._id) });
                if (!employeeColl) throw new Error("Employee not found");

                await context.collection('employees').updateOne(
                    { _id: new ObjectId(args._id) },
                    { $set: args.employee }
                );

                return "Employee updated successfully";
            } catch (error) {
                console.log(error);
            }
        },
        // updatePerson: (parent, { _id, input }) => {
        //     const personIndex = peopleDataSource.findIndex(person => person._id === _id);
        //     if (personIndex !== -1) {
        //         const updatedPerson = {
        //             _id,
        //             ...input
        //         };
        //         peopleDataSource[personIndex] = updatedPerson;
        //         return updatedPerson;
        //     }
        //     throw new Error("Person not found");
        // },
        // deletePerson: (parent, { _id }) => {
        //     const personIndex = peopleDataSource.findIndex(person => person._id === _id);
        //     if (personIndex !== -1) {
        //         peopleDataSource.splice(personIndex, 1);
        //         return true;
        //     }
        //     throw new Error("Person not found");
        // }
    },
    Employee: {
        async skills(parent, args, context: Db) {
            try {
                const skillsList = parent.skills.map(async (id: String) => {
                    return await context.collection('Skills').findOne({ _id: new ObjectId(id.toString()) });
                });
                return skillsList;

            } catch (error) {
                console.log(error);
            }
        }
    }
}




export default employeeResolver;