const core = require('@actions/core');
const { runTest } = require('./lib/run-test');

(async function () {
  try {
    let tag = core.getInput('tag');
    console.log(`Run tests on Tag ${tag}!`);

    let resultsPath= await runTest({
      tag
    });

    core.setOutput("results-path", resultsPath);
  } catch (error) {
    core.setFailed(error.message);
  }
})();