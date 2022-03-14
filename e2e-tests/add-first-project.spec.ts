import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../POM/loginPage';

test.describe('Case1', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.navigatePage()
  })

  test('Project should be created', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.login()

    // Validation /projects
    await expect(page).toHaveURL('https://app.stage.lokalise.cloud/projects');

    // add a new project
    await loginPage.createProject()

  })
})



/*
● Project should be created
● Project’s page should be opened
● On /projects there should be just this project
*/