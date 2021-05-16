const core = require("@actions/core");
const exec = require("@actions/exec");

let args = ["depcheck"];

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
    await exec.exec("npx", args);
  } catch (err) {
    core.setFailed("depcheck failed");
  }
})();
