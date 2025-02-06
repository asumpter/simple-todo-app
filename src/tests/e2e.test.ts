import puppeteer, { Browser, Page } from 'puppeteer';

describe('App.js', () => {
  let browser: Browser | undefined = undefined;
  let page: Page | undefined = undefined;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it('contains the welcome text', async () => {
    await page?.goto('http://localhost:5173');
    await page?.waitForSelector('.container');
    const text = await page?.$eval('.container', (e) => e.textContent);
    expect(text).toContain('Simple Todo App');
  });

  afterAll(() => browser?.close());
});
