const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function takeInput(question) {
  return new Promise((resolve) => {
    readline.question(question, resolve);
  });
}

module.exports = takeInput;
