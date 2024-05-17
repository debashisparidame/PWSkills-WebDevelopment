/*

    3. Imagine you are given a list of student objects, each containing the student's name and their marks. Your
task is to create a function that checks results by filtering out students whose score is more than 90 and
prints a message saying, "Congratulations [Student Name]! You have cleared the exam."

*/

const students = [
    {
        name:"mithun",
        marks: 95,
    },
    {
        name:"prabir",
        marks:75,
    },
    {
        name:"Alka",
        marks:92,
    },
    {
        name:"Shivam",
        marks:70,
    },
    {
        name:"Farman",
        marks:99,
    },
];

const checkResults = (name) => 
    {
        for (let student of students)
            {
                if (student.name === name)
                    {
                        return student.marks > 90 ? console.log(`Congtratulations ${student.name}! You have cleared the exam.`) : console.log(`Sorry ! You have not cleared the exam.`);
                    }
            }
            console.log("Invalid User !!!");
    };

checkResults("mithun");
checkResults("prabir");
checkResults("Debashis");