function runFunction(fn) {
  fn();
}

runFunction(function () {
  console.log("Salam Yal Habeeb");
});

runFunction(() => {
  console.log("Salam from Arrow");
});
