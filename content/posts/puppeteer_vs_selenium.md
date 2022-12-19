---
categories:
  - "test automation"
tags:
  - "puppeteer"
description: "What is Selenium? What is Puppeteer?"
ID: "63aa5e8a-68bf-4001-a232-10c5156768d5"
title: "Puppeteer vs Selenium"
slug: "puppeteer_vs_selenium"
author: []
coverImage: "public/1671478055740_puppeteer_vs_se.png"
createdAt: 1671478091076

---
# Puppeteer vs Selenium
![Puppeteer vs Selenium](https://s3.eu-central-1.amazonaws.com/1ek.in.images/puppeteer_vs_se.png)

If you are trying to select one of these frameworks you are in the right place!

If you know much already, please skip to the third section! 😎

I worked with both of these frameworks, to be honest, there is no winner of this comparison. But certainly, you have to select Puppeteer or Selenium up to your use case.

1) What is Selenium?

Selenium is an open-source framework to manipulate the web browser, you can use Selenium with multiple languages. In the industry, the most preferred languages to implement Selenium are Java and C#. The reason is that these software languages are the most used languages for enterprise web development.

2) What is Puppeteer?

Puppeteer is a NodeJS library available on NPM like any other NodeJS libraries :). Therefore you have to use Typescript or Javascript to create and run your tests. Using both JS and TS, you may implement the notorious pattern Page Object.

3) What is the true choice over these two promising frameworks?

- When testing mobile how important to be native for your application?

I am asking this because with Puppeteer you can test for different screen resolutions to simulate the mobile view, but if your app has native device dependencies like using the mobile device’s camera or maybe your app uses a browser interface object like WebRTC you have to use the real device to test and the only way to automate it for a native mobile web browser (Mobile Safari on iOS or Chrome on Android) is the Appium framework which you can run almost the same script you wrote for your a normal WebDriver test.

The pro here is you don't have to write another script to test a real device’s mobile web browser.

- Do you really need to execute the test on real devices?

It depends on how serious you are because during my career I have seen apps that run perfectly on one version of IOS but on another version fails even on the same model. It is worse for Android! Because every brand has its own distribution, they change a lot on core Android. If you are a manager in an enterprise company who loves her/his job you may like to go safer and test them all! Before a customer finds the bug. Believe me, it is nearly impossible to make an app without bugs without testing on multiple platforms.

Now the question is “Where to find all that real devices to run tests?”

Use Testinium! Check out the link [testinium](https://testinium.com/automated/)

note: I am not going to lie here 👐 , I work for Testinium but even if I didn't work there I would use it. It not only provides real devices but also managing your scenarios and features like reporting and scheduling are very convincing.

But if you are working in a startup don’t think too much, because maybe your app doesn't have to work 100% in every possible device, model, and version combination.

- Is your app has to work on any condition on any browser?

To be brief Puppeteer has no official Safari Browser support. Using different versions of Chrome and Firefox is a real pain. If you want to test all possible versions for all possible browsers running on various operating systems you have to stick to Selenium. But its really frustrating to manage all environments by yourself, use Testinium 😃 [testinium](https://testinium.com/) 😆

- Do you need speed?

If you are a start-up company which is developing the features rapidly. Puppeteer is a great choice because it is simple to develop and binding it with your CI/CD pipelines might be a nice solution for a young company.

- Which realm are you from?

I love both Java and JS/TS. If you are familiar with the NodeJS environment you may select Puppeteer otherwise if there is no need for an adventure stick with Selenium.

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — —-

Don’t be afraid, for both Selenium and Puppeteer there are BDD options like Cucumber and enough testing frameworks like JUnit.

Let’s look at some Puppeteer code

This might be your BasePage object:

```
export default class BasePage {

async wait(time) {
 await page.waitFor(time)
}async getTitle() {
 return await page.title()
}async getUrl() {
 return await page.url()
 }
}
```

And this might be your LoginPage object:

```
import BasePage from './BasePage'export default class LoginPage extends BasePage {
async visit() {
 await page.goto('https://testinium.com/login')
}async isLoginFormDisplayed() {
 await page.waitForSelector('#login_form')
 await page.waitForSelector('#user_login')
 await page.waitForSelector('#user_password')
}async login(user, password) {
 await page.waitForSelector('#login_form')
 await page.type('#user_login', user)
 await page.type('#user_password', password)
 await page.click('.btn-primary')
}
}
```

If you noticed the code is written in TS.

- Try Puppeteer online through [try-puppeteer](https://try-puppeteer.appspot.com/) !

![Puppeteer test](https://s3.eu-central-1.amazonaws.com/1ek.in.images/test.png)

Thanks for reading! 😺