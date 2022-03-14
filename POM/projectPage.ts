import type { Page, Locator } from '@playwright/test';

export class ProjectPage {
  readonly page: Page;
  readonly newProjBtn: Locator;
  readonly projNameField: Locator;
  readonly proceedBtn: Locator;
  readonly addKeyBtn: Locator;
  readonly keyIdField: Locator;
  readonly platformList: Locator;
  readonly selectWebPlatform: Locator;
  readonly saveKeyBtn: Locator;
  readonly idNameDisplay: Locator;


  constructor(page: Page) {
    this.page = page
    this.newProjBtn = page.locator('button:has-text("New project")');
    this.projNameField = page.locator('[placeholder="MyApp\\ \\(iOS\\ \\+\\ Android\\ \\+\\ Web\\)"]');
    this.proceedBtn = page.locator('#tabs--1--panel--0 button:has-text("Proceed")');


    // Key Editor Form
    this.addKeyBtn = page.locator('[aria-label="Add\\ first\\ key"]');
    this.keyIdField = page.locator('[placeholder="Give\\ the\\ key\\ a\\ unique\\ ID"]');
    this.platformList = page.locator('#s2id_autogen6');
    this.selectWebPlatform = page.locator('div[role="opt3ion"]:has-text("Web")');
    this.saveKeyBtn = page.locator('#btn_addkey');
    this.idNameDisplay = page.locator('text=uniqueId')
  }

  async navigatePage() {
    await this.page.goto('https://app.stage.lokalise.cloud/');
  }

  async createProject() {
    await this.newProjBtn.click();
    await this.projNameField.fill('automated new project');
    await this.page.fill('.Select__value-container.Select__value-container--is-multi', 'italian');
    await this.page.keyboard.press('Enter');
    await this.proceedBtn.click();
  }

  async fillKeyEditor() {
    await this.addKeyBtn.click()
    await this.keyIdField.fill('uniqueId')
    await this.platformList.fill('web')
    await this.page.keyboard.press('Enter');
    // await this.selectWebPlatform.click()
    await this.saveKeyBtn.click()
  }
}
