const fetch = require("node-fetch"); //importと同じもの
const jsdom = require("jsdom");

const { JSDOM } = jsdom; //オブジェクトから中身を取り出す

const scrape = async () => {
  const res = await fetch(
    "https://suumo.jp/jj/common/ichiran/JJ901FC001/?initFlg=1&seniFlg=1&pc=50&kwd=%E4%B8%AD%E9%87%8E&ar=030&newflg=0&km=1&bs=040"
  );
  const html = await res.text(); //htmlなおしている
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const nodes = document.querySelectorAll("td");
  //   const tokyoWeathers = Array.from(nodes).map((td) => td.textContent.trim());
  const nakanoHome = Array.from(nodes).filter((dd) => {
    return dd == "5万円";
  });

  console.log(nakanoHome);
};
scrape();
