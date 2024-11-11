const argvErrors = require("../errors/argvErrors");
const { argvNamesMap } = require("../argvNames");

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
