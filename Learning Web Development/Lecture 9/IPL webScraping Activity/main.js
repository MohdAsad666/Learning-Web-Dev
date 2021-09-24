/** @format */

let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

request(url, cb);

function cb(error, response, html) {
  if (error) {
    console.log(eroor);
  } else {
    AllmatchLinkCollector(html);
  }
}

function AllmatchLinkCollector(html) {
  let searchTool = cheerio.load(html);
  let AllmatchLink = `https://www.espncricinfo.com${searchTool(
    'a[data-hover = "View All Results"]'
  ).attr("href")}`;
  request(AllmatchLink, AllMatchCB);
}
function AllMatchCB(err, response, html) {
  if (err) {
    console.log(err);
  } else {
    scoreCardGetter(html);
  }
}

function scoreCardGetter(html) {
  let searchTool = cheerio.load(html);
  let scorecardLinkCollection = searchTool(`a[data-hover = "Scorecard"]`);
  for (let i = 0; i < scorecardLinkCollection.length; i++) {
    let ScoreCardLink = `https://www.espncricinfo.com${searchTool(
      scorecardLinkCollection[i]
    ).attr("href")}`;
    request(ScoreCardLink, ScoreLinkCB);
  }
}
function ScoreLinkCB(err, response, html) {
  if (err) {
    console.log(err);
  } else {
    scoreGetter(html);
  }
}

function scoreGetter(html) {
  let searchTool = cheerio.load(html);
  let scoretable = searchTool(".table.batsman tr");
  for (let i = 0; i < scoretable.length; i++) {
    let NoOfTds = searchTool(scoretable[i]).find("td");
    if (NoOfTds.length == 8) {
      console.log(`${searchTool(NoOfTds[0]).text()}`);
    }
  }
}