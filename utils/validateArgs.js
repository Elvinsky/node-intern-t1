const validations = require("../constants/validations/argvValidations");

const throwError = (msg) => {
  console.error(`Error: ${msg}`);
  process.exit(1);
};

const validateArgs = (args) => {
  validations.forEach((validation) => {
    const { failed, error } = validation(args);
    if (failed) {
      throwError(error);
    }
  });
};

module.exports = validateArgs;
