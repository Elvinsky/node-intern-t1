const parseArgs = require("./utils/parseArgs");
const parseCSVtoJSON = require("./utils/parseCSVtoJSON");

const parsedArgs = parseArgs();

parseCSVtoJSON(
  parsedArgs.sourceFile,
  parsedArgs.resultFile,
  parsedArgs.separator
);
