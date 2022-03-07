import path from "path";

const Freemarker = require("freemarker.js");
export function main() {
  let fm = new Freemarker({
    viewRoot: path.join(__dirname, "./../template"),
    options: {},
  });

  fm.render(
    "test.ftl",
    { test: "hello freemarker" },
    function (err: any, html: any, output: any) {
      console.log(html);
      console.log(`err : ${err}`);
      console.log(`output: ${output}`);
    }
  );
}
