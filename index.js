const core = require("@actions/core");
const execa = require("execa");

const workdir = core.getInput("workdir") || ".";
core.info(`Using workdir: ${workdir}`);

(async () => {
  try {
    const { stdout } = await execa("npx", ["depcheck", workdir]);
    core.info(stdout);
  } catch (err) {
    core.setFailed(err.stdout);
  }
})();
