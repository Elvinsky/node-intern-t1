const validations = require("../constants/validations/validations.argv");

const throwError = require("./errorThrow");

const validateArgs = (args) => {
  validations.forEach((validation) => {
    const { failed, error } = validation(args);
    if (failed) {
      throwError(error);
    }
  });
};

module.exports = validateArgs;
