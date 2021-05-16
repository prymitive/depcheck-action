# depcheck action

This action will run [depcheck](https://www.npmjs.com/package/depcheck)
to analyze project dependecies. It will fail if `depcheck` detects any issues,
like missing or unused dependencies.

## Inputs

### `workdir`

Directory to pass to `depcheck`. Default is `"."`.

### `config`

Config file to use. Default is `""` meaning no `--config` flag will be passed
to `depcheck`.

## Example usage

```YAML
uses: prymitive/depcheck-action@v1.4.1
with:
  workdir: 'subdir'
  config: 'subdir/depcheck.yaml'
```
