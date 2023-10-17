async function run() {
  try {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0) {
          resolve("Success");
        } else {
          reject("Failed");
        }
      }, 3000);
    });
    throw new Error("OBAAA");
    console.log(response);
  } catch (error) {
    // write in database the error
    console.log(error);
  }
}

run();
