// Write your solution in this file!
let employee = {
    name : 'Sean',
    streetAdress: '111 West 77th Street'
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, { [key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign(obj, { [key]: value});
}

function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = { ...obj };
    delete newEmployee.[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj.[key];
    return obj;
}