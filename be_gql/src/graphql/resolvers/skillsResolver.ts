import { IResolvers } from "@graphql-tools/utils";
import { Db } from "mongodb";
const COLLECTION_SKILLS = 'skills';
const skillsResolver: IResolvers = {
    Query: {
        getSkills: async(parent, args, context) => {
            try{
                const skills = await context.collection(COLLECTION_SKILLS).find().toArray();
                return skills;
            }catch(error){
                console.log(error);
                console.log('Error fetching skills: ', error);
              throw error;
            }
        }
    },
    Mutation: {
       createSkill: async(parent, args, context:Db) => {
            const {skillInput} = args;
            try{
                const exr=  new RegExp(skillInput.name, 'i');
                const skill = await context.collection(COLLECTION_SKILLS).findOne({name: exr});
                if(skill) throw new Error('Skill already exists');

                await context.collection(COLLECTION_SKILLS).insertOne(skillInput);
                return  'Skill created';
            }catch(error){
                console.log(error);
                console.log('Error creating skill: ', error);
              throw error;
            }
       }
    }
}

export default skillsResolver;