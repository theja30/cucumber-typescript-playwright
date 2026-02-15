import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchPage extends BasePage {
    readonly page: Page;
    readonly inventoryItem: string;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        super(page);
        this.inventoryItem = '.inventory_item';
        this.cartBadge = page.locator('.shopping_cart_badge');
    } 

    async searchForSkuAndAddToCart(sku: string) {
        //this.page.debug();
        const productRow = this.page.locator(this.inventoryItem, { hasText: sku });
        await productRow.locator('button.btn_primary').click();
    }

    async verifyCartQuantity(qty: number) {
        await expect(this.cartBadge).toHaveText(qty.toString());
    }
}
