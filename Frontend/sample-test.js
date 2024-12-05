import { Builder, By, until } from 'selenium-webdriver';

const username = process.env.BROWSERSTACK_USERNAME;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;

async function runTest() {
  let driver = new Builder()
    .usingServer(`http://${username}:${accessKey}@hub-cloud.browserstack.com/wd/hub`)
    .withCapabilities({
      'browserName': 'chrome',
      'browserstack.local': 'false',
      'browserstack.selenium_version': '3.14.0'
    })
    .build();

  try {
    await driver.get('http://www.google.com');
    let searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('BrowserStack');
    await searchBox.submit();
    await driver.wait(until.titleContains('BrowserStack'), 10000);
    console.log(await driver.getTitle());
  } finally {
    await driver.quit();
  }
}

runTest().catch((err) => {
  console.error('Error:', err);
});
