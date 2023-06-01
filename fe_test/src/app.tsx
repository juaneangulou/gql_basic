import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_EMPLOYEES } from './queries/employeeQuery'
const App: React.FC = () => {
    const { loading, error, data } = useQuery(GET_EMPLOYEES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    const employees: any[] = data?.getEmployees;
    return (
        <>
            <h2>Nuevo app</h2>
            {employees.map((employee: any) => (
                <div key={employee?._id}>
                    <p>{employee?.name}</p>
                </div>
            )
            )
            }
        </>
    )
}

export default App;