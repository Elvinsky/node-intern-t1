const argvMap = require("../constants/argvNames");

const parseNamedArgv = () => {
  const rawArgs = process.argv.slice(2); // Удаляем пути файла и ноды
  const parsedArgs = Object.values(argvMap).reduce((acc, key) => {
    acc[key] = "";
    return acc;
  }, {});

  for (let idx = 0; idx <= rawArgs.length; idx++) {
    const argName = argvMap[rawArgs[idx]];
    if (argName) {
      parsedArgs[argName] = rawArgs[idx + 1];
    }
  }
  return parsedArgs;
};

module.exports = parseNamedArgv;
