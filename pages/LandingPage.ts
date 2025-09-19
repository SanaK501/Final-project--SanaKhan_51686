// pages/LandingPage.ts
import { expect, Page } from '@playwright/test';

export class LandingPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=25&product_id=28');
  }

  async assertPageTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }
}
