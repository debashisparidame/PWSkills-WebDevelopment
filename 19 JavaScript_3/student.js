/*

    2. Define in object that represents a student's information including name, age, and grade. Implement a
        method to update the student's grade.

*/

const student = {
    name: "John",
    age: 18,
    grade: "A",
};


//Method to update the student's grade
function updateGrade(newGrade)
{
    student.grade = newGrade;
}

updateGrade("B");
console.log(student)