const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");
const fs = require("fs");
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
  let innings = $(`.card.content-block.match-scorecard-table`);
  let htmlStr = "";
  for (let i = 0; i < innings.length; i++) {
    let tempHTML = $(innings[i]).html();
    let headerContent = $(tempHTML).find(`.header-title.label`);
    let currentteamName = headerContent.text().split("INNINGS")[0].trim();
    if (currentteamName == winningTeamName) {
      htmlStr += $(tempHTML).find(".table.bowler").html();
      fs.writeFileSync("table.html", `<table>${htmlStr}</table>`);
      let records = $(htmlStr).find("tr").splice(1);
      maxWic = -1;
      maxWicPlayerName = "";
      for (let i = 0; i < records.length; i++) {
        let ScoreCard = $(records[i]).find("td");
        if (ScoreCard.length == 11) {
          let wicketTaken = $(ScoreCard[4]).text();
          let playerName = $(ScoreCard[0]).text();
          if (maxWic < wicketTaken) {
            maxWic = wicketTaken;
            maxWicPlayerName = playerName;
          }
        }
      }
    }
  }
  console.log(
    `Winning Team is ${winningTeamName} and Highest Wicket Taken were ${maxWic} by ${maxWicPlayerName}`
  );
  return;
}
