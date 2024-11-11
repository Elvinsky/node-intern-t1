const { argvNamesMap } = require("../constants/constants.argv");

const parseNamedArgv = () => {
  const rawArgs = process.argv.slice(2); // Удаляем пути файла и ноды
  const parsedArgs = Object.values(argvNamesMap).reduce((acc, key) => {
    acc[key] = "";
    return acc;
  }, {});

  for (let idx = 0; idx <= rawArgs.length; idx++) {
    const argName = argvNamesMap[rawArgs[idx]];
    if (argName) {
      parsedArgs[argName] = rawArgs[idx + 1];
    }
  }
  return parsedArgs;
};

module.exports = parseNamedArgv;
