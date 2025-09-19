import { test } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';
import { ReviewPage } from '../pages/ReviewPage';

test.describe('Product Review Tests', () => {
  test('Submit valid 4-star review', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const reviewPage = new ReviewPage(page);

    await landingPage.goto();
    await landingPage.assertPageTitle('HTC Touch HD');

    await reviewPage.submitReview(
      'Test User',
      'This product is excellent and worth every penny!',
      4
    );

    await reviewPage.assertSuccessMessage();
  });

  test('Show error for short review text', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const reviewPage = new ReviewPage(page);

    await landingPage.goto();
    await landingPage.assertPageTitle('HTC Touch HD');

    await reviewPage.submitReview('Test User', 'Too short.', 4);

    await reviewPage.assertErrorMessage(
      'Warning: Review Text must be at least 25 characters!'
    );
  });

  test('Show error when rating is missing', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const reviewPage = new ReviewPage(page);

    await landingPage.goto();
    await landingPage.assertPageTitle('HTC Touch HD');

    await reviewPage.submitReview(
      'Test User',
      'This product is quite good and worth buying.',
      0
    );

    await reviewPage.assertErrorMessage(
      'Warning: Please select a review rating!'
    );
  });
});
