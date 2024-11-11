const parseArgs = require("./utils/parseArgs");
const validateArgs = require("./utils/validateArgs");

const args = parseArgs();

console.log(validateArgs(args));
