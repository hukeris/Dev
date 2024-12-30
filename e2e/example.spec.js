// @ts-check
const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  //Log to console
  console.log("URL: " + page.url());  
  console.log("Hello World!");  
});

/*test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/

test('has title2', async ({ browser }) => {

  const context = await browser.newContext({
    recordVideo: {
       dir: '.'
   }
 });

  const page2 = await context.newPage();
  await page2.goto('https://www.wikipedia.org/');
  await page2.getByRole('link', { name: 'English 6,924,000+ articles' }).click();  
  await page2.screenshot({path: './wiki_screen.png'});

  console.log('browser.browserType(): ' + browser.browserType());
  console.log("URL: " + page2.url()); 

  await page2.close();
  await context.close();
  await browser.close();
});