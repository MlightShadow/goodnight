import path from "path";

export function load_conf() {
  const yaml = require("js-yaml");
  const fs = require("fs");

  const doc = yaml.load(
    fs.readFileSync(path.join(__dirname, "./../conf/main.yaml"), "utf-8")
  );

  console.log(doc.version);
  console.log(doc.test);
  console.log(doc.test.testsub);
}
