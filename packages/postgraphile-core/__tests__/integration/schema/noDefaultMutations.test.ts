import * as core from "./core";

test(
  "prints a schema without default mutations",
  core.test("c", {
    disableDefaultMutations: true,
    setofFunctionsContainNulls: false,
  }),
);
