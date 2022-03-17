import type { Page, Locator } from '@playwright/test';

export class SettingsPage {
  readonly page: Page;
  readonly projectSettings: Locator;
  readonly projectMoreBtn: Locator;
  readonly projectNameField: Locator;
  readonly deleteProjectBtn: Locator;
  readonly projectNameDelete: Locator;
  readonly projectDeletedBtn: Locator;

  constructor(page: Page) {
    this.page = page
    this.projectSettings = page.locator(
      'text=automated new projectDone-Base words-Team1Keys0AppsInstall appsEditorUploadScree >> [aria-label="Settings"]'
    );
    this.projectMoreBtn = page.locator(
      'text=More...EditorUploadScreenshotsGlossaryAppsSettingsDuplicate finderAutomationsAct >> [aria-label="More\\.\\.\\."]'
    );
    this.projectNameField = page.locator('[placeholder="Project\\ name"]');
    this.deleteProjectBtn = page.locator('text=Delete project');
    this.projectNameDelete = page.locator('.bootbox-form .bootbox-input');
    this.projectDeletedBtn = page.locator('button:has-text("Delete project")')
  }

  async navigatePage() {
    await this.page.goto('https://app.stage.lokalise.cloud/');
  }

  async deleteProject() {
    await this.projectMoreBtn.click();
    await this.projectSettings.click();
    await this.deleteProjectBtn.click();
    await this.projectNameDelete.fill('automated new project');
    await this.projectDeletedBtn.click();
  }
}
