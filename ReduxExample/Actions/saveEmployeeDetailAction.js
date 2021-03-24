// type & payload. employeeDetails is a payload which contain some
// information like name, schoolName & companyName of employee.SAVE_EMPLOYEE_DETAIL
// is a type here, using this type we will add employee details in store through Reducer.

export const saveEmployeeDetails = employeeDetails => ({
  type: 'SAVE_EMPLOYEE_DETAIL',
  employeeDetails: {
    name: employeeDetails.name,
    schoolName: employeeDetails.schoolName,
    companyName: employeeDetails.companyName,
  },
});
