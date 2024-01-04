export default function createReportObject(employeesList) {
    return {
        ['allEmployees']: employeesList,
        getNumberOfDepartments(employeesList){return(employeesList[departmentName].length);}
    };
}
