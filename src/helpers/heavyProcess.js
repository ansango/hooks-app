export const heavyProcess = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log("running");
  }
  return `${iterations} iterations done`;
};
