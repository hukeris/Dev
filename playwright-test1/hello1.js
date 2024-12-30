const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
 
  const context = await browser.newContext({
    recordVideo: {
        dir: './playwright-test1/videos1'
    }
  });

const p0 = await context.newPage();
const p1 = await context.newPage();

  const page = await context.newPage();
  page.setDefaultTimeout(240000);
  await page.goto('https://www.wikipedia.org/');
  //await page.getByRole('link', { name: 'English 6,924,000+ articles' }).click();
console.log(page.url());  
  //await page.getByRole('link', { name: 'December solstice' }).click();
  await page.screenshot({path: './playwright-test1/wiki_screen.png'});
//console.log(page.url());
console.log('page.waitForLoadState:' + page.waitForLoadState());



p0.setDefaultTimeout(240000);
await p0.goto('https://www.google.com');
await p0.screenshot({path: './playwright-test1/idokep.png'});
console.log(p0.url());
console.log('p0.waitForLoadState:' + p0.waitForLoadState());

console.log('xxx');

await p1.goto('https://www.jofogas.hu');
await page.close();
await p1.close();
await p0.reload();


console.log('yyy');
  // ---------------------
  await context.close();
  await browser.close();

})();