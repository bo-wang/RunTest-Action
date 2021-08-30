const core = require('@actions/core');
const github = require('@actions/github');
const { runTest } = require('./lib/run-test');

(async function () {
  try {
    let tag = core.getInput('tag');
    console.log(`Run tests on Tag ${tag}!`);

    let resultsPath= await runTest({
      tag
    });

    core.setOutput("results-path", resultsPath);
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
})();