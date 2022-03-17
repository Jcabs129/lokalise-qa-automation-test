/*
Case 1: Add first project
Case 2: Add nth project
case 3:
case 4:
*/

import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../POM/loginPage';
import { ProjectPage } from '../POM/projectPage';
import { SettingsPage } from '../POM/settingsPage';

test.describe('Case1 - add first project', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)
    const projectPage = new ProjectPage(page)

    await loginPage.navigatePage()
    await loginPage.login()
    await expect(page).toHaveURL('https://app.stage.lokalise.cloud/projects');

    // add a new project
    await projectPage.createProject()

    // Case 3: Add first key
    // await projectPage.fillKeyModalWithPlural()

    //validation Expect Project Page with created key
    // await expect(projectPage.idNameDisplay).toBeVisible()
  })

  test('case 2 + 3 - add nth project', async ({ page }) => {
    const projectPage = new ProjectPage(page)

    await projectPage.fillKeyModalWithPlural()


    // case 4: add translations for the key
    await projectPage.addFirstTranslation()
    await projectPage.addSecondTranslation()

  })

  // test.afterEach(async ({ page }) => {
  //   const settingsPage = new SettingsPage(page)

  //   await page.goto('https://app.stage.lokalise.cloud/projects')

  //   //  Delete project
  //   await settingsPage.deleteProject()
  // })
})


