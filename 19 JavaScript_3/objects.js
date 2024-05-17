/*

    1. Create an object representing a car with properties like "make," "model," and "year". Write a function to
        display all the properties of the car.

*/

const car = 
{
    make: "Toyota",
    model: "Camry",
    year: 2022
};

// Function to display all the properties of the car

function displayCarProperties(car)
{
    for (const propety in car)
        {
            console.log(`${propety}: ${car[propety]}`);
        }
}

displayCarProperties(car);