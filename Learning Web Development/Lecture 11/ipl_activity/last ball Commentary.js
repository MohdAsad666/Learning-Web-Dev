/** @format */

const request = require("request");
const cheerio = require("cheerio");
const url = `https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary`;
//

request(url, cb);

function cb(err, response, html) {
  if (err) {
    console.log(err);
    return;
  } else {
    htmlHandler(html);
  }
}
function htmlHandler(html) {
  const searchtool = cheerio.load(html);
  const SearchedResult = searchtool(
    `.d-flex.match-comment-padder.align-items-center .match-comment-long-text>p`
  );
  console.log(`Last ball Commentary\n
  ${searchtool(SearchedResult[0]).text()}`);
}
