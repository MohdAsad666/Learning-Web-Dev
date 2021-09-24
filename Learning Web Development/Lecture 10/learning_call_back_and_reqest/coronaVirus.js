/** @format */

const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");
console.log("Before");
request("https://www.worldometers.info/coronavirus/", cb);
function cb(error, response, body) {
  if (error) {
    console.error("error:", error);
    return;
  } else {
    handleHtml(body);
  }
}
function handleHtml(body) {
  let searchTool = cheerio.load(body);
  let searchedValue = searchTool("#maincounter-wrap>.maincounter-number>span");
  // for (let i = 0; i < searchedValue.length; i++) {
  //   console.log(searchTool(searchedValue[i]).text());
  // }
  let total = searchTool(searchedValue[0]).text();
  let death = searchTool(searchedValue[1]).text();
  let recovered = searchTool(searchedValue[2]).text();
  console.log(chalk.gray("total Coronavirus Cases till date", total));
  console.log(chalk.green("total Patient recovered till date", recovered));
  console.log(chalk.red("total death till date", death));
}
console.log("After");
