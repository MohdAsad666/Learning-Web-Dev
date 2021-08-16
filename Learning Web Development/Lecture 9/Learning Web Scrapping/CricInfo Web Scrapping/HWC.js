/** @format */

const request = require("request");
const cheerio = require("cheerio");
let url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
request(url, cb);

function cb(err, response, html) {
  if (err) {
    console.log(`Error found ${err}`);
  } else {
    dataExtractor(html);
  }
}
let HighestWickettaker = { name: "", wicket: -1 };
function dataExtractor(html) {
  let searchTool = cheerio.load(html);
  let elemRep = searchTool(".table.bowler tbody tr");
  for (let i = 0; i < elemRep.length; i++) {
    let cols = searchTool(elemRep[i]).find("td");
    let player = searchTool(cols[0]).text();
    let wicket = searchTool(cols[4]).text();
    console.log(wicket);
    if (HighestWickettaker.wicket < wicket) {
      HighestWickettaker.name = player;
      HighestWickettaker.wicket = wicket;
    }
  }
  console.log(HighestWickettaker);
}
