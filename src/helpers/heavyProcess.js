import { log } from "./log";

export const heavyProcess = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    log("HeavyProcess Function - MemoHook", "Running");
  }
  log("HeavyProcess Function - MemoHook", "End");
  return `${iterations} iterations done`;
};
