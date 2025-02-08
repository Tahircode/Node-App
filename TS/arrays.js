"use strict";
function filterUser(users) {
    return users.filter(x => x.age >= 18);
}
console.log(filterUser([{
        firstname: "tahir",
        lastname: "khan",
        age: 20
    }, {
        firstname: "barku",
        lastname: "singh",
        age: 30
    }]));
