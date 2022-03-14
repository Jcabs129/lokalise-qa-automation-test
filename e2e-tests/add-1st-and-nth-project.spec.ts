/*
Case 1: Add first project
Case 2: Add nth project
*/

import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../POM/loginPage';
import { ProjectPage } from '../POM/projectPage';


test.describe('Case1 - add first project', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.navigatePage()
    await loginPage.login()
  })

  test('case 2 + 3 - add nth project', async ({ page }) => {
    await expect(page).toHaveURL('https://app.stage.lokalise.cloud/projects');
    const loginPage = new LoginPage(page)
    const projectPage = new ProjectPage(page)

    // add a new project
    await projectPage.createProject()

    // Case 3: Add first key
    await projectPage.fillKeyEditor()
    //validation Expect Project Page with created key
    await expect(projectPage.idNameDisplay).toBeVisible()
  })

})


