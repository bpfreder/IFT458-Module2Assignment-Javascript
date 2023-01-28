const greetTheStudent = studentName => `Hello there ${studentName}`

//Do NOT repeat yourself (DRY)
const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}. ${firstName}`;

const titleName = fullName("Mary", "R", "Jane");
console.log(titleName);