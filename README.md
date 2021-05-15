# depcheck action

This action will run [depcheck](https://www.npmjs.com/package/depcheck) to analyze
project dependecies. It will fail if `depcheck` detects any issues, like
missing or unused dependencies.

## Inputs

### `workdir`

Working directory, this action will `chdir()` to that directory before running `depcheck`.
If you have a `.depcheckrc` config file it should be placed there.
Default is `"."`.

## Example usage

```YAML
uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'
```
