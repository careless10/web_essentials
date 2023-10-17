const data = {
  username: "Menawer",
  hobby: "coding",
};

// let username = data.username;
// let hobby = data.hobby;

let { username, hobby: hby } = data;

// console.log(username, hby);

const minMaxGrades = [3, 10];
// let minGrade = minMaxGrades[0];
// let maxGrade = minMaxGrades[1];
let [minGrade, maxGrade] = minMaxGrades;
// console.log(minGrade, maxGrade);

//intermediate
let serverData = {
  user: {
    name: "Salem",
    age: 21,
  },
  degree: "Accounting",
};

let {
  user: { name: username2, age },
  degree,
} = serverData;
console.log(username2, age);
