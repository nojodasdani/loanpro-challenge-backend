# LoanPro Challenge Backend


## Installation

Install the dependencies and devDependencies.

```sh
npm install
```

Set up your `env.{stage}.yml` file **before** running the project; copy the format of `env.example.yml` and create your own file for dev and prod environment. `e.g. env.dev.yml and env.prod.yml`

##### Run project locally.

```sh
serverless offline --stage {env}
```

##### Deploy new stage in AWS.

```sh
serverless deploy --stage {env} 
```

e.g.
```sh
serverless deploy --stage dev
```

##### Remove stage in aws.

```sh
serverless remove --stage {env}
```

e.g.
```sh
serverless deploy --stage dev
```