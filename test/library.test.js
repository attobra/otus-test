const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const path = require('chromedriver').path;

const {Builder, By, Key, until} = require('selenium-webdriver');
// const {describe, it, after, before} = require('selenium-webdriver');
let driver;
describe('Test to access an assessement', function () {
     this.timeout(50000);
    //before each test start a fresh browser
    beforeEach(async (done)=>{
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://my.otus.com');
        //already logged in
        done()
    })
    //after each test quit/close browser
    // afterEach(()=>{
    //     driver.quit();
    // })

    it('accesses assessment test', async ()=>{
        //step1: click on assessmnent
        const assessTab = await driver.findElement(By.css('ul > li:nth-child(6)'));
        assessTab.click();
        //step 2: click on 1st tech challenge
        const techChallenge = await driver.wait(until.elementLocated(By.css('tr:nth-child(1) ')), 10000);
        techChallenge.click();
        //expected results
        const title = await driver.wait(until.elementLocated(By.css('h2')), 10000);
        expect(title).toContain('Tech Challenge-Student Profile')
    })
    
})

describe('Take an assessment tests', function (){
    this.timeout(50000);
    beforeEach(async(done) =>{
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://my.otus.com');
        //login implied
        //Prerequisite: accessing assessment test passed
        const assessTab = await driver.findElement(By.css('ul > li:nth-child(6)'));
        assessTab.click();
        const techChallenge = await driver.wait(until.elementLocated(By.css('tr:nth-child(1) ')), 10000);
        techChallenge.click();
        done()
    })

    it('submits an assessment', async ()=>{
        let otusBtn = await driver.findElement(By.css('.otus-button'));
        //step 1: click to start
        otusBtn.click();
        // Step2: Enter text in the box
        await driver.findElement(By.css('input')).sendKeys('Take Challenge Student Profile');
        //Step2: click to send the input
        let submit = await driver.findElement(By.css('.submit'));
        submit.click();
        //Expected Results: check the result of the popup
        let submit = await driver.wait(until.elementLocated(By.css('h2')), 10000);
        //console log the message inside the popup
        console.log("this is the alert message: " + await result.getAttribute('textContent'));
       
    })
    
})