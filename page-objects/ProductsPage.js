import { expect } from "@playwright/test";

export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.dressesBookmark = page.getByRole("link", {
      name: "Dresses",
      exact: true,
    });
    this.casualDressesCheck = page.getByLabel("Casual Dresses (1)");
    this.addToCart = page.getByRole("link", { name: "Add to cart" }).first();
    this.addingToCartMessage = page.getByRole("heading", {
      name: " Product successfully added",
    });
    this.checkoutLink = page.getByRole("link", {
      name: "Proceed to checkout ",
    });
  }
  visit = async () => {
    await this.page.goto("/");
  };
  addingToTheCart = async () => {
    await this.dressesBookmark.click();
    await this.casualDressesCheck.click();
    await this.addToCart.click();
    const successMessageText = await this.addingToCartMessage.innerText();

    expect(successMessageText).toContain(
      "Product successfully added to your shopping cart"
    );

    await this.checkoutLink.waitFor();
    await this.checkoutLink.click();

    await this.page.waitForURL("/index.php?controller=order");
  };
}
