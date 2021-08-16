/** @format */

const request = require("request");
const cheerio = require("cheerio");



request("https://www.npmjs.com/package/cheerio", cb);

function cb(err, response, html) {
  if (err) {
    console.log(`Error found ${err}`);
  } else {
    // console.log(response);
    dataExtractor(html);
  }
}

function dataExtractor(html) {
  let searchTool = cheerio.load(html);
  let elemRep = searchTool("#readme>h1");
  let moduleContent = elemRep.text().trim();
  console.log(moduleContent);
}
