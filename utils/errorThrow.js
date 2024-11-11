const throwError = (msg) => {
  console.error(`Error: ${msg}`);
  process.exit(1);
};

module.exports = throwError;
