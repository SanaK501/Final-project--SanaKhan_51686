// pages/ReviewPage.ts
import { Page } from '@playwright/test';

export class ReviewPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async submitReview(name: string, review: string, rating: number) {
    // Fill name & review
    await this.page.getByLabel('Your Name').fill(name);
    await this.page.getByLabel('Your Review').fill(review);

    const ratingSelector = `input[name="rating"][value="${rating}"]`;
    await this.page.check(ratingSelector);

   
    await this.page.getByRole('button', { name: 'Continue' }).click();

    await this.page.waitForSelector('.alert-success', { timeout: 30000 });
  }
}
