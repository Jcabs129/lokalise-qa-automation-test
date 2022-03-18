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
  readonly keyNumText: Locator;
  readonly secondTransField: Locator;
  readonly enTranslationBtn: string;
  readonly secondTransBtn: string;
  readonly translationInput
  readonly saveTransBtn: string
  readonly itTranslationBtn: string
  readonly pluralLabel: Locator


  readonly keyEditorAdvancedTab: Locator
  readonly pluralToggle: Locator
  readonly firstPluralTransInput: string
  readonly secondPluralTransInput
  readonly enPluralTranslationBtn
  readonly itPluralTranslationBtn

  constructor(page: Page) {
    this.page = page
    this.newProjBtn = page.locator('button:has-text("New project")');
    this.projNameField = page.locator('[name="name"]');
    this.proceedBtn = page.locator('#tabs--1--panel--0 button:has-text("Proceed")');

    this.pluralLabel = page.locator('span[class="label label-info edit-key cursor-pointer label-plural"]')

    // Key Editor Form
    this.addKeyBtn = page.locator('[aria-label="Add first key"]');
    this.keyIdField = page.locator('[placeholder="Give\\ the\\ key\\ a\\ unique\\ ID"]');
    this.platformList = page.locator('#s2id_autogen6');
    this.selectWebPlatform = page.locator('div[role="opt3ion"]:has-text("Web")');
    this.saveKeyBtn = page.locator('#btn_addkey');
    this.idNameDisplay = page.locator('text=uniqueId')
    this.keyNumText = page.locator('text=1 keys')

    // key Translations locators
    this.enTranslationBtn = '[data-lang-id="640"] [class="highlight-wrapper"] div';
    this.translationInput = "textarea";
    this.saveTransBtn = 'button[class*="save"]'
    this.itTranslationBtn = 'div[data-rtl="0"] >> nth=1';

    // Plural locators
    this.keyEditorAdvancedTab = page.locator("#advanced_tab")
    this.pluralToggle = page.locator('div[class*="bootstrap-switch-id-theplural_switch"]')
    this.firstPluralTransInput = '[data-lokalise-editor-plural="one"] textarea'
    this.secondPluralTransInput = '[data-lokalise-editor-plural="other"] textarea'
    this.enPluralTranslationBtn = 'span[class="lokalise-popup-wrapper"]'
    this.itPluralTranslationBtn = 'span[class="empty"]'

  }

  async navigatePage() {
    await this.page.goto('https://app.stage.lokalise.cloud/');
  }

  async createProject() {
    await this.newProjBtn.click();
    await this.projNameField.fill('automated new project');
    await this.page.fill(
      '.Select__value-container.Select__value-container--is-multi', 'italian'
    );
    await this.page.keyboard.press('Enter');
    await this.proceedBtn.click();
  }

  async fillKeyEditor() {
    await this.addKeyBtn.click()
    await this.keyIdField.fill('uniqueId')
    await this.platformList.fill('web')
    await this.page.keyboard.press('Enter');
    await this.saveKeyBtn.click()
  }

  async fillKeyModalWithPlural() {
    await this.addKeyBtn.click()
    await this.keyIdField.fill('uniqueId')
    await this.platformList.fill('web')
    await this.page.keyboard.press('Enter');

    await this.keyEditorAdvancedTab.click()
    await this.pluralToggle.click()


    // await this.selectWebPlatform.click()
    await this.saveKeyBtn.click()
  }

  async addFirstTranslation() {
    await this.inputTransField(
      this.enTranslationBtn,
      this.translationInput,
      "Hello"
    );
    await this.page.waitForSelector("text=Hello", { state: "visible" })
  }

  async addSecondTranslation() {
    await this.inputTransField(
      this.itTranslationBtn,
      this.translationInput,
      "Ciao"
    );
    await this.page.waitForSelector("text=Ciao", { state: "visible" });
  }

  async addFirstPluralTrans() {
    await this.inputTransField(
      this.enPluralTranslationBtn,
      this.firstPluralTransInput,
      "Child"
    );
    await this.page.waitForSelector("text=Child", { state: "visible" })
  }

  async addSecondPluralTrans() {
    await this.inputTransField(
      this.itPluralTranslationBtn,
      this.secondPluralTransInput,
      "Bambine"
    );
    await this.page.waitForSelector("text=Bambine", { state: "visible" });
  }

  async inputTransField(
    button: string,
    input: string,
    word: string
  ) {
    await this.page.waitForSelector(button, { state: "visible" });
    await this.page.click(button);
    await this.page.waitForSelector(input, { state: "visible" });
    await this.page.fill(input, word);
    await this.page.click(this.saveTransBtn);
    await this.page.waitForSelector(this.saveTransBtn, {
      state: "hidden",
    });
  }
}
