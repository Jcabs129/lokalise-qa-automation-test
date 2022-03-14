import type { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly passField: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page
    this.emailField = page.locator('[placeholder="user\\@company\\.com"]')
    this.passField = page.locator('[placeholder="password"]')
    this.loginBtn = page.locator('button:has-text("Log in")')
  }

  async navigatePage() {
    await this.page.goto('https://app.stage.lokalise.cloud/');
  }

  async login() {
    // await this.page.fill('[placeholder="user\\@company\\.com"]', 'test5@example.com');\this.emailField
    await this.emailField.fill('test5@example.com')
    await this.passField.fill('testing123');
    await this.loginBtn.click();
  }

  async createProject() {
    await this.page.click('button:has-text("New project")')
    await this.page.fill('[placeholder="MyApp\\ \\(iOS\\ \\+\\ Android\\ \\+\\ Web\\)"]', 'automated new project')
    await this.page.fill('.Select__value-container.Select__value-container--is-multi', 'italian')
    await this.page.keyboard.press('Enter')
  }
}