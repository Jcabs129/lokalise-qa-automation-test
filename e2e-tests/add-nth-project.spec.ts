import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../POM/loginPage';

test.describe('Case1', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.navigatePage()
    await loginPage.login()
  })

  test('Project should be created', async ({ page }) => {
    await expect(page).toHaveURL('https://app.stage.lokalise.cloud/projects');
    const loginPage = new LoginPage(page)

    // add a new project
    await loginPage.createProject()

  })
})

/*
● Project should be created
● Project’s page should be opened
● On /projects there should be two projects in correct order 
*/