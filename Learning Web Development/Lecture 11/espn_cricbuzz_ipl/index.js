/** @format */

const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const url = `https://www.espncricinfo.com/series/ipl-2020-21-1210595/`;
request(url, webpageHandler);
function webpageHandler(err, response, html) {
  if (err) {
    console.log(`Error in webpageHandler ${err}`);
    return;
  }
  webpageHTMLHandler(html);
}
function webpageHTMLHandler(html) {
  let $ = cheerio.load(html);
  let link =
    `https://www.espncricinfo.com` +
    $('a[data-hover = "View All Results"]').attr("href");
  request(link, matchResult);
}
function matchResult(err, response, html) {
  if (err) {
    console.log(`Error in matchResult ${err}`);
    return;
  }
  matchResultHTMLHandler(html);
}
function matchResultHTMLHandler(html) {
  let $ = cheerio.load(html);
  let link = $('a[data-hover = "Scorecard"]');
  for (let i = 0; i < link.length; i++) {
    let matchResultLink =
      `https://www.espncricinfo.com` + $(link[i]).attr("href");
    request(matchResultLink, MatchScoreCard);
  }
}
function MatchScoreCard(err, response, html) {
  if (err) {
    console.log(`error in MatchScoreCard ${err}`);
  }
  let $ = cheerio.load(html);
  let teams = $(".event .name");
  let folder0 = path.join(`ipl record`, $(teams[0]).text());
  let folder1 = path.join(`ipl record`, $(teams[1]).text());
  if (!fs.existsSync(folder0)) {
    fs.mkdirSync(folder0);
  }
  if (!fs.existsSync(folder1)) {
    fs.mkdirSync(folder1);
  }
  
}
// .event .name
