import { gql, DocumentNode } from "apollo-boost";

export const GET_EMPLOYEES: DocumentNode = gql`
{
  getEmployees{_id, name
    skills{_id, name}
  }
}
`;