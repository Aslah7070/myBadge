try {
    throw new Error("Something went wrong!");
  } catch (error) {
    console.log(error.name);    // "Error"
    console.log(error.message); // "Something went wrong!"
    console.log(error.stack);   // Stack trace
  }
  