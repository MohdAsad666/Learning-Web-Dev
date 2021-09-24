/** @format */

const cheerio = require("cheerio");
const { is } = require("cheerio/lib/api/traversing");
const request = require("request");
const url = `https://github.com/topics`;

request(url, gitHubTopicPage);

function gitHubTopicPage(err, response, html) {
  const $ = cheerio.load(html);
  let topics = $(".topic-box");
  for (let i = 0; i < topics.length; i++) {
    topics[i] = `https://github.com${$(topics[i]).find("a").attr("href")}`;
    request(topics[i], topicPage);
  }
}
function topicPage(err, response, html) {
  const $ = cheerio.load(html);
  let links = $(".wb-break-word");
  for (let i = 0; i < 8; i++) {
    let link = `https://github.com${$(links[i]).attr("href")}`;
    request(link, repositoryPage);
  }
}
function repositoryPage(err, response, html) {
  const $ = cheerio.load(html);
  let issueLink = `https://github.com/${$("#issues-tab").attr("href")}`;
  request(issueLink, issuePage);
}
function issuePage(err, response, html) {
  const $ = cheerio.load(html);
  let issues = $('a[data-hovercard-type="issue"]');
  for (const issue in issues) {
    console.log($(issue).text().trimLeft().trimRight().trimStart().trimEnd());
  }
}
