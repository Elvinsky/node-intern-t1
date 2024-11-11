const path = require("path");
const fs = require("fs");
const throwError = require("./errorThrow");
const parserErrors = require("../constants/errors/errors.parser");

const parseCSVtoJSON = (sourceFile, resultFile, separator = ",") => {
  const sourcePath = path.join(__dirname, "..", sourceFile);
  const resultPath = path.join(__dirname, "..", resultFile);

  const data = fs.readFileSync(sourcePath, "utf-8");
  const rows = data.split("\n");

  if (rows.length < 2) {
    throwError(parserErrors.emptyCSV);
  }

  const headers = rows[0].split(separator).map((header) => header.trim());

  const jsonData = rows.slice(1).map((row) => {
    const values = row.split(",").map((value) => value.trim());
    let jsonObject = {};

    headers.forEach((header, index) => {
      jsonObject[header] = values[index] || null;
    });

    return jsonObject;
  });

  fs.writeFileSync(resultPath, JSON.stringify(jsonData), "utf-8");
};

module.exports = parseCSVtoJSON;
