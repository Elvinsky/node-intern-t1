const fs = require("fs");
const path = require("path");
const csvGeneratorErrors = require("../constants/errors/errors.mocker");
const throwError = require("./errorThrow");
const { faker } = require("@faker-js/faker");

const filePath = path.join(__dirname, "..", "files", "large.csv");

const size = 1024 * 1024 * 10;
const columns = 10;
const separator = ",";

const readHeaders = async () => {
  try {
    const data = fs.readFileSync(
      path.join(__dirname, "..", "files", "mock.csv"),
      "utf-8"
    );

    const headers = data.split("\n")[0].split(separator);

    return headers;
  } catch (error) {
    throwError(csvGeneratorErrors.errorReadingHeaders(error));
  }
};

const generateRow = () => {
  return (
    Array.from({ length: columns }, () => faker.lorem.word()).join(separator) +
    "\n"
  );
};

function generateRandomNumberOfRows(separator, numberOfColumns, numberOfRows) {
  let row = "";
  for (let i = 0; i < numberOfColumns; i++) {
    row += `randomWord${i}${separator}`;
  }
  return (row + "\n").repeat(numberOfRows);
}

const generateCSV = async () => {
  readHeaders().then((headers) => {
    fs.writeFileSync(filePath, headers + "\n");

    const timer = setInterval(() => "Writing...", 1000);

    const numberOfColumns = headers.length;
    const randomNumberOfRows = generateRandomNumberOfRows(
      separator,
      numberOfColumns,
      1000
    );

    while (fs.statSync(filePath).size < size) {
      fs.appendFileSync(filePath, randomNumberOfRows);
    }

    console.log(`File generated at ${filePath}`);
    clearInterval(timer);
  });
};

generateCSV();
