/** @format */

const request = require("request");
const cheerio = require("cheerio");
let url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";
request(url, cb);

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
  let elemRep = searchTool(".match-comment-wrapper .match-comment-long-text");
  console.log(elemRep);
  let lbc = searchTool(elemRep[0]).text();
  console.log(lbc);
}
