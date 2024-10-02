// Write your solution in this file!
const employee = {
    name:"Assumpta",
    streetaddress:"kisauni rd"
}

function updateEmployeeWithKeyAndValue(employee,key,value){
   const newEmployee = {...employee}
   newEmployee[key] = value
   return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const employee2 = {...employee}
    delete employee2[key]
    return employee2
    
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
  