const { log } = require('./log');

async function runTest({
  tag
}) {
  try {
    // await doFetch({
    //   url,
    //   method,
    //   headers,
    //   expectedStatus,
    //   expectedResponseField,
    //   expectedResponseFieldValue,
    // });
    return 'allure-results';
  } catch (error) {
    log(`Run test failed with ${error}`);
  }
}

module.exports = { runTest };