const fs = require("fs");

const data = fs.readFileSync("README.md", "utf-8");

const newContent = data.replace(/React/gi, "Angular");

fs.writeFileSync("README-ANGULAR.md", newContent);
