/** @format */

const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");
const fs = require("fs");
const { add } = require("cheerio/lib/api/traversing");
const url = `https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard`;
request(url, cb);

function cb(err, response, html) {
  if (err) {
    console.log(err);
    return;
  } else {
    htmlHandler(html);
  }
}
let winningTeamName, maxWic, maxWicPlayerName;
function htmlHandler(html) {
  let $ = cheerio.load(html);
  const SearchedResult = $(`div[class = "event"] .teams .team`);

  for (let i = 0; i < SearchedResult.length; i++) {
    let hasClass = $(SearchedResult[i]).hasClass("team-gray");
    if (hasClass === false) {
      winningTeamName = $(SearchedResult[i]).find(".name").text().trim();
    }
  }
  let innings = $(`.card.content-block.match-scorecard-table`).toArray();
  // innings.
  for (let i = 0; i < innings.length - 1; i++) {
    TableEvaluator($(innings[i]).html());
  }
}
function TableEvaluator(html, i) {
  let $ = cheerio.load(html);
  let records = $("tr");
  for (let i = 0; i < records.length; i++) {
    if ($(records[i]).has("href")) {
      let link = $(records[i]).find("a").attr("href");
      if (link != undefined) {
        birthDayEval(link);
      }
    }
  }
  console.log(`============================`);
}
// https://www.espncricinfo.com/
function birthDayEval(link) {
  let address = `https://www.espncricinfo.com${link}`;
  request(address, birthdayCB);
}
function birthdayCB(err, response, html) {
  if (err) {
    console.log(err);
    return;
  }
  let $ = cheerio.load(html);
  let DOB = $(`.text-uppercase.gray-700.mb-0.pb-0-5.player-card-heading`);
  console.log(DOB.length);
  return;
}
