import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { page } from "../utils/hooks";

let loginPage: LoginPage;

Given("I navigate to login page", async () => {
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When("I login with username {string} and password {string}", async (u, p) => {
  await loginPage.login(u, p);
});

Then("I should login successfully", async () => {
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
