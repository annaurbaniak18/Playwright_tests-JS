import { expect } from "@playwright/test";

export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.dressesBookmark = page.getByRole("link", {
      name: "Dresses",
      exact: true,
    });
    this.casualDressesCheck = page.getByLabel("Casual Dresses (1)");
    this.addToCart = page.locator("a.button[title='Add to cart']").first();
    this.addingToCartMessage = page.getByRole("heading", {
      name: " Product successfully added",
    });
  }
  visit = async () => {
    await this.page.goto("/");
  };
  addingToTheCart = async () => {
    await this.dressesBookmark.click();
    await this.casualDressesCheck.click();
    await this.addToCart.click();
    // await this.page.pause();
  };
}
