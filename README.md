# Introduction to CI/CD with TravisCI

## Fundamentals

### What is DevOps

- Based on Agile
- Feedback loop
- Anti-Silo

> Goal: Rapid development in important areas

### What is CI (Continuous Integration)

- Regular merges
- Automated build and tests after each commit

> Goal: Improve software quality

### What is CD (Continuous Delivery/Deployment)

- Building, testing and releasing
- Environments: QA, staging, production, ...
- Delivery: ability to deploy on press of button
  - Good for most projects with release schedules
    - Mobile apps
    - projects that require manual QA
- Deployment: completely automated deployment
  - Good for projects without release schedules
    - documentation

> Goal: Have a deployment-ready, tested app

### What else is to DevOps

- Microservices
  - Do one thing and do it well (Unix Philosophy)
- Infrastructure as Code
  - Create deterministic environments
  - Enforce policies
  - AUTOMATE EVERYTHING
- Monitoring
  - Log management
  - Getting data (crashes, response times)

## Common pitfalls

- Chosing wrong CI product
  - tradeoff between complexity and flexibility
- Automating the wrong processes
  - <https://xkcd.com/1205/>
  - Is process error-prone when not automated
  - Detailled documentation sometimes greater than automation

## TODO

- [x] Theory
  - [x] What is CI/CD?
  - [x] <travis-ci.org> vs. <travis-ci.com>
  - [x] Serverless with now
- [x] Write simple express API
  - [x] Initialize git
  - [x] Initialize npm
  - [x] Add expressJS
  - [x] Write API
- [x] Add Tests
  - [x] Add jest supertest
  - [x] Write tests
- [x] Push to GitHub
- [ ] Configure TravisCI for CI
- [ ] Write deployment to now
  - [ ] Configure now.json
  - [ ] travis-cli and environment variables
- [ ] Add more tests
  - [ ] Add eslint
  - [ ] Configure TravisCI stages

### Things not covered here

- mocking a data source
- integration and e2e tests
- automatic semantic versioning
- mobile
  - mobile testing
  - creating screenshots
  - deployment to app stores
- automatic rollbacks

## Important links

- [TravisCI Docs](https://docs.travis-ci.com/)
- [Now v1 Docs](https://zeit.co/docs/v1/)
- [Jest Docs](https://jestjs.io/docs/en/getting-started)
