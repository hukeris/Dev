// @ts-check
const { test, expect } = require('@playwright/test');
//const { chromium } = require('playwright');

/*test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  //Log to console
  console.log("URL: " + page.url());  
  console.log("Hello World!"); 
  
}); */

/*test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/

/*test('has title2', async ({ browser, video }) => {

  const context = await browser.newContext({
    recordVideo: {
       dir: 'Videos/',
       size: { width: 640, height: 480 },
   }
 });
console.log("Video: " + video);
  const page2 = await context.newPage();
  //const path = await page2.video().path();
  await page2.goto('https://www.wikipedia.org/');
  await page2.getByRole('link', { name: 'English 6,924,000+ articles' }).click();  
  await page2.screenshot({path: './wiki_screen.png'});

  //console.log('browserName: ' + browserName );
  
  console.log("URL: " + page2.url());
  console.log();  

  await page2.close();

  await context.close();
  await browser.close();

  //console.log("videos: " + path);
});*/

test.use({ video: 'on-first-retry' });

test('video test', async ({ browser, video }) => {

  test.info().annotations.push({
    type: 'browser version',
    description: browser.version(),
  });

  const context = await browser.newContext({
    recordVideo: {
       dir: 'Videos/',
       size: { width: 640, height: 480 },
   }
  });

 console.log("Video: " + video);

 const page = await context.newPage();
 await page.goto('https://www.wikipedia.org/');
 await page.getByRole('link', { name: 'English 6,935,000+ articles' }).click(); 

 await page.close();
 await context.close();
 await browser.close();

 const path = await page.video().path();
 console.log("Video path: " + path );

  test.info().annotations.push({
    type: 'Video path',
    description: path,
  });

});