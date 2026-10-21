const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const utils = require("../Utility/BaseClass");
const LoginPage = require("../Pages/LoginPage");
const RegistrationPage = require("../Pages/RegistrationPage");
const assert = require("assert");


let login;
let register;

When(
  "The user has to fill the userName {string} and password {string}",
  async function (user, pass) {
    login = new LoginPage(this.page);
    await login.enterUsername(user);
    await login.enterPassword(pass);
  },
);

When("The user has to click the login button", async function () {
 await login.clickLogin();
});

Then("The user should be navigate the invalid login page", async function () {
  const pageUrl = await utils.getPageURL(this.page);
  assert.ok(pageUrl.includes("Facebook"));
  console.log("-----User In Invalid Page----");
  
});

Given("The user should be in login page", async function () {
  console.log("----Browser Lauch maintained in Hooks Class-------")
});

When("The user has to click the create new account link", async function () {
  register = new RegistrationPage(this.page);
  await register.clickCreateAccount();
});

When(
  "The user has to fill the firstName,lastName and other details",
  async function () {
    await register.enterFirstName("Ramesh");
    await register.enterLastName("kumar");
  },
);

When("The user has to click the submit button", async function () {
  await register.clickSubmit();
});

Then(
  "The user should be get successfully registered meassage",
  async function () {
    console.log("----User Successfully Registered-------");
    
  },
);
