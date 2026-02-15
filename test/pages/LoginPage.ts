import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

  private get usernameInput(): Locator {
    return this.page.locator('[data-test="username"]');
  }

  private get passwordInput(): Locator {
    return this.page.locator('[data-test="password"]');
  }

  private get loginButton(): Locator {
    return this.page.locator('[data-test="login-button"]').first();
  }

  async navigate() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}