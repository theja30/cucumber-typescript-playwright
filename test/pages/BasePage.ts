import { Page } from "@playwright/test";

export abstract class BasePage {
    constructor(protected page: Page) {}

    async navigate(url: string) {
        await this.page.goto(url);
    }
}