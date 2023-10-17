const data = {
  username: "Salem",
  age: 33,
  degree: "Diploma",
  hobbies: ["Football", "Basketball"],
  height: 180,
  weight: 80,
};

const { username, age, ...rest } = data;
// console.log(rest);
const grades = [50, 55, 65, 90];
const [lowest, ...restGrades] = grades;

const data2 = { ...data };
// const {username,...data2} = data;
data.username = "Sara";
data2.hobbies = [...data.hobbies];
data2.hobbies[0] = "Padel";
console.log(data);
console.log(data2);
