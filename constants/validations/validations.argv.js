const argvErrors = require("../errors/errors.argv");
const { argvNamesMap } = require("../constants.argv");

const validations = [
  (args) => {
    return {
      failed: Object.entries(args).some(
        (el) => el[0] !== argvNamesMap["--separator"] && !el[1]
      ),
      error: argvErrors.incorrectArgs,
    };
  },
];

module.exports = validations;
