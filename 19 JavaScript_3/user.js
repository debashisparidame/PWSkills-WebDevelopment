/*

    7. Build a program that utilizes a Map to store user information (name, age, email) and allows adding,
    Updating, and deleting user records.

*/

const userMap = new Map();

function addUser(name, age, email) //Adding user
{
    const userInfo = {age, email};
    userMap.set(name, userInfo);
}

function updateUser(name, age, email) //Updating user
{
    if(userMap.has(name))
        {
            const userInfo = userMap.get(name);
            userInfo.age = age;
            userInfo.email = email;
            userMap.set(name, userInfo);
        }
}

function deleteUser(name) //Deleting user
{
    userMap.delete(name);
}

addUser("Debashis", 23, "debashis@gmail.com");
addUser("Priya", 22, "Priya@gmail.com");
console.log(userMap);


updateUser("Debashis", 25, "dpdeb@gmai.com");
console.log(userMap);

deleteUser("Priya");
console.log(userMap);