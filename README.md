## generate-env-artifact

### Overview
A command-line utility that can be used to render a template that is populated by environment variables.

The module was created specifically to generate CI/CD artifacts during the deployment process based on environment but it may be useful in other scenarios as well.

```
npm i generate-env-artifact
```

**Usage**
```
npx generate-env-artifact --template=</path/to/template> --output=</path/to/artifact>
```

**Example**

Let's say during deployment it is necessary to generate a `wrangler.toml` file containing various Cloudflare API keys, which are configured as secret environment variables in your deployment pipeline.

For this example, create a template for a `wrangler.toml` file that contains text such as:

```toml
name="MyApp"
type = "webpack"
account_id = "{{CF_ACCOUNT_ID}}"

route = "{{{CF_ROUTE}}}"
zone_id = "{{CF_ZONE_ID}}"
```
Then you can invoke `generate-env-artifact` in your pipeline configuration like so:
```shell
npx generate-env-artifact --template=/deploy/targets/cloudflare/wrangler.tmpl --output wrangler.toml
```
The templated environment variables are CF_ACCOUNT_ID, CF_ROUTE, CF_ZONE_ID.

The prefix is optional, but may help with organization.

