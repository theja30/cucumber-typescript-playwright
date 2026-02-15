import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { SearchPage } from "../pages/SearchPage";
import { page } from "../utils/hooks";

let searchPage: SearchPage;

Given("I search and add to cart", async (dataTable: DataTable) => {
  searchPage = new SearchPage(page);
  dataTable.hashes().forEach((product) => {
    searchPage.searchForSkuAndAddToCart(product.ProductName)
  });
});

When("I should see the cart qty as {int}", async (qty: number) => {
  await searchPage.verifyCartQuantity(qty);
});


