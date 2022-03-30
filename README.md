
## Setup
1. Navigate to root `/lokalise-qa-automation-test`
2. npm install
3. run tests - `npm run test headless:test` or `npm run headed:test`


## Further Imporvements to my solution
- add reporting - https://www.npmjs.com/package/mochawesome-report-generator
- Selectors need cleaning up
- call .afterEach at the end of test to write a function to delete the project once all cases have run
- my tests directory more granular and add a test file to each case
- private-keys/password to be kept away - `https://www.npmjs.com/package/dotenv`