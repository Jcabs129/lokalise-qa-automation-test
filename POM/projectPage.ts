import type { Page, Locator } from '@playwright/test';

export class ProjectPage {
  readonly page: Page;
  readonly newProjBtn: Locator;
  readonly projNameField: Locator;
  readonly proceedBtn: Locator;

  constructor(page: Page) {
    this.page = page
    this.newProjBtn = page.locator('button:has-text("New project")')
    this.projNameField = page.locator('[placeholder="MyApp\\ \\(iOS\\ \\+\\ Android\\ \\+\\ Web\\)"]')
    this.proceedBtn = page.locator('#tabs--5--panel--0 button:has-text("Proceed")')
  }

  async navigatePage() {
    await this.page.goto('https://app.stage.lokalise.cloud/');
  }


  async createProject() {
    await this.newProjBtn.click()
    await this.projNameField.fill('automated new project')
    await this.page.fill('.Select__value-container.Select__value-container--is-multi', 'italian')
    await this.page.keyboard.press('Enter')
    await this.proceedBtn.click()
  }
}
