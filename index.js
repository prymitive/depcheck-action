const core = require("@actions/core");
const execa = require("execa");

let args = [];

const config = core.getInput("config");
if (config !== "") {
  core.info(`Using config file: ${config}`);
  args.push(`--config=${config}`);
}

const workdir = core.getInput("workdir") || ".";
core.info(`Using workdir: ${workdir}`);
args.push(workdir);

(async () => {
  core.info(`Running: ${args.join(" ")}`);
  try {
    const { stdout, stderr } = await execa("./node_modules/.bin/depcheck", args);
    core.info(stdout);
    core.info(stderr);
  } catch (err) {
    core.setFailed(err.stdout);
  }
})();
