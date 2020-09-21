
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const path = require('chromedriver').path;

const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to Url
        await driver.get('http://library-app.firebaseapp.com');

        const submitBtn = await driver.findElement(By.css('.btn-primary'));
        // Step1: Enter text in the input
        await driver.findElement(By.css('input')).sendKeys('us');

        //  await driver.wait(function(){
        //   return submitBtn.isEnabled();
        // }, 10000);

        //check if opacity changes
        // await driver.wait(function(){
        //     return submitBtn.getCssValue('opacity')  
        // })

        //Step2: click to send the input
        submitBtn.click();
        //EXPLICIT WAIT : check the result after 10 seconds
        let result = await driver.wait(until.elementLocated(By.css('.alert-success')), 10000);
        //console log the message inside the popo out
        console.log("this is the alert message: " + await result.getAttribute('textContent'));

       
    }
    finally{
        driver.quit();
    }
})();
