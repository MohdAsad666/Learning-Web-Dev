/** @format */
let puppeteer = require("puppeteer");
let browserStartPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: [],
});
let page;
browserStartPromise
  .then(function (browserObj) {
    let newPagePromise = browserObj.newPage();
    return newPagePromise;
  })
  .then(function (newtab) {
    page = newtab;
    console.log(`new tab has opened`);
    let gPage = newtab.goto("https://www.google.com/");
    return gPage;
  })
  .then(function () {
    console.log(`Google opened`);
    let TypingSearch = page.type("input[title = 'Search']", "pepcoding");
    return TypingSearch;
  })
  .then(function () {
    return page.keyboard.press("Enter");
  })
  .then(function () {
    return page.waitForSelector(".LC20lb.DKV0Md", { visible: true });
  })
  .then(function () {
    return page.click(".LC20lb.DKV0Md");
  })
  .then(function (params) {
    page.waitForSelector("#lp_modal_close", { visible: true });
    return page.click("#lp_modal_close");
  })
  .then(function (params) {});
