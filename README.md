a bit of an headache when adding translations on the keys itself (i see what you did there 😢)

## Setup
1. Navigate to root `/lokalise-qa-automation-test`
2. npm install
3. run tests - `npx playwright test --headed` or `npm run headed:test`

## POM Structure


## further Imporvements to my solution
- add reporting - https://www.npmjs.com/package/mochawesome-report-generator
- Selectors need cleaning up
- call .afterEach at the end of test to write a function to delete the project once all cases have run
- probably made my tests more granular and add a test file to each case
- private-keys/password to be kept away - `https://www.npmjs.com/package/dotenv`