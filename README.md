# ADA SQA "To Do List Application" UI
## This is the front end UI for an application made for the SQA module week 2
### The back end service repo can be found here: https://github.com/kasandrop/ADA-Todo

### Test Suite Results

Main Branch:
![Vitest Testing Status](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/actions/workflows/node.js.yml/badge.svg)

Final Branch:
![Vitest Testing Status](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/actions/workflows/node.js.yml/badge.svg?branch=final)

### Project Description

Our project is a simple to-do application. It will help manage our daily tasks, which can be categorised into groups such as Personal, Work or Household. Therefore, our to-do app will have the following components: Tasks: Each task has a name, description, and a completion status (yes or no). Labels: There can be Personal, Work, Household label. Relationship: Each task must be associated with one only label, indicating the context or category of the task. This is a one-to-many relationship from tasks to labels. The same label can have zero or more tasks.

### Key Features:
- Create new todo box
- Delete todo box
- Mark todo box as done
- Edit todo description text
- Counts the number of todos open
- Offline capability (by storing the data locally as JSON)
- Online capability (by storing the data in a remote database)

### Screenshots/Video
https://github.com/JGrater/ADA-SQA-Todo-Application-UI/assets/72577411/b014216e-bc97-4836-a01e-afb552209d6e

## Team Description

The team was split into front and back end pairs for development and testing. Then worked together on integrating and creating the readMe document.

### Team Members

- **Marcin Wasilewski**
  - Role/Responsibility: Back end designing and implementing  
  - Percentage Contribution: 25%

- **Jason Grater**
  - Role/Responsibility: Front end designing and implementing
  - Percentage Contribution: 25%

- **James Brown**
  - Role/Responsibility: Back end testing and readMe writing
  - Percentage Contribution: 25%
 
- **Wares Islam**
  - Role/Responsibility: Front end testing and creating pipeline
  - Percentage Contribution: 25%

...

## Tools Used

- **Version Control:**

Git, GitHub

- **Testing:** 

|Testing:|Docs:|
|-----|-----|
|[vitest](https://github.com/vitest-dev/vitest)|https://vitest.dev/|
|[@vue/test-utils](https://github.com/vuejs/test-utils)|https://test-utils.vuejs.org/|
|[@testing-library/vue](https://github.com/testing-library/vue-testing-library)|https://testing-library.com/docs/vue-testing-library/intro/|
|[@nuxt/test-utils](https://github.com/nuxt/test-utils)|https://nuxt.com/docs/getting-started/testing|
|[jsdom](https://github.com/jsdom/jsdom)|https://github.com/jsdom/jsdom|
|[happy-dom](https://github.com/capricorn86/happy-dom)|https://github.com/capricorn86/happy-dom|

- **Test Code Coverage:**
  
Automatic coverage reports were set up for pull requests, here is an example (https://github.com/JGrater/ADA-SQA-Todo-Application-UI/pull/4):
![coverage_report](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/assets/72577411/02c587f3-4723-4075-b6d8-5c9a608b059f)

- **Frameworks/Libraries:**

|Framework:|Docs:|
|-----|-----|
|[Nuxt](https://github.com/nuxt/nuxt)|https://nuxt.com/docs/getting-started/introduction|
|[Vue3](https://github.com/vuejs/core)|https://vuejs.org/guide/introduction.html|

- **Linters:** 

|Linters:|Docs:|
|-----|-----|
|[Volar](https://github.com/vuejs/language-tools)|https://marketplace.visualstudio.com/items?itemName=Vue.volar/|

- **Project Management Tools:**

Miro, Kanban Board, Google Meet

- **Performance and Accessibility Audit:**

|Performance and Accessibility Tools:|Docs:|
|-----|-----|
|[Lighthouse CI](https://github.com/apps/lighthouse-ci)|https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md|

## Instructions

### How to Clone

``git clone https://github.com/JGrater/ADA-SQA-Todo-Application-UI.git``

### How to Run/Use the Application

#### [Frontend] Install (IMPORTANT)
``npm i``

#### [Frontend] Run Dev Server (IMPORTANT)
``npm run dev``

#### [Frontend] Run Vitest Tests (IMPORTANT)
``npm run test:unit``

#### [Frontend] Switch to REST API mode (IMPORTANT)
```
Open components folder
Open content.vue file
At line 22, change "testing: true" to "testing: false"

REASON FOR USING THIS METHOD INSTEAD OF ENV VARIABLES:
bug with the vitest and nuxt integration  
(https://github.com/nuxt/test-utils/issues/349)
(https://github.com/nuxt/test-utils/issues/297)

```

#### [Frontend] Final Build (optional)
``npm run build``

## Project Workflow
### Project Management Strategies

For our project workflow, we adopted an agile methodology to ensure a collaborative and transparent process for all team members to review progress. 

#### Ceromonies

We conducted a one-week sprint with daily stand-up meetings at the beginning to coordinate  team members, ensuring all requirements would be met and work was distributed evenly. 

#### Agile Practices

During the sprint, we utilized a Kanban board to visualize tasks for each team member, allowing us to track the progress of individual tasks in real-time. 

![image](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/assets/119420246/5c914fff-2b6b-49b2-9762-34fccc2b7f0b)

## Test Methodologies and Tools

<To Be Filled In>

### Test Methodologies

<To Be Filled In>

### Types of Testing

|Frontend Testing Used|Why?|
|-----|-----|
|unit|To test if part of the code blocks for the frontend are working as expected|
|integration|To test if integrating the frontend and javascript logic is working as expected|


### Evidence

<To Be Filled In>

## Coding Best Practices
Coding best practices are a set of guidelines designed to improve the quality of software development and make the code more maintainable, scalable, and readable.

#### Consistent Naming Conventions:
This makes the code easier to read and understand. It includes using clear descriptive names for variable, functions, and classes, etc.
#### Code Formatting and Organization:
This includes proper indentation, spacing and grouping of code. Tools like linters and formatters can help enforce these rules.
#### Commenting and Documentation:
Comments should explain why certain decisions were made in the code. Documentation should explain what the code does, how to use it, and any dependencies it has.
#### Error Handling:
This involves anticipating potential problems and handling them gracefully, often through the use of try/catch blocks or returning meaningful error messages.

## CI Pipeline
Using Node.js to run the testing on build time. Here is the config file:
```yml
name: Vitest Testing
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version:
          - 18.x
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: npm
      - name: Install packages
        run: npm ci
      - name: Execute Unit tests
        run: npm run test:unit
```

```yml
name: Vitest Coverage
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version:
          - 18.x

    permissions:
      # Required to checkout the code
      contents: read
      # Required to put a comment into the pull-request
      pull-requests: write
      
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: npm
      - name: Install packages
        run: npm ci

      - name: Execute Coverage report
        id: coverage
        continue-on-error: true
        run: npm run test:coverage

      - name: label when coverage fails
        if: ${{ steps.coverage.outcome == 'failure' }}
        uses: andymckay/labeler@1.0.4
        with:
          add-labels: "commit-message-rule-violation"

      - name: label removal when coverage succeeds
        if: ${{ steps.coverage.outcome == 'success' }}
        uses: andymckay/labeler@1.0.4
        with:
          remove-labels: "commit-message-rule-violation"

      - name: Vitest Coverage Report
        if: always() # Also generate the report if tests are failing
        uses: davelosert/vitest-coverage-report-action@v2.1.1
        with:
          name: 'Frontend'
          json-summary-path: './coverage/coverage-summary.json'
          json-final-path: './coverage/coverage-final.json'

```
### Pull Request Strategies

<To Be Filled In>

## Standards

### IEEE730

<To Be Filled In>

### Reasons for Choosing

<To Be Filled In>

### Key Features Applied

<To Be Filled In>

## Performance and Accessibility Audit
Google Lighthouse was used for automated performance and accessibility testing (https://github.com/GoogleChrome/lighthouse-ci)
Here is a sample of a [report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1701862677309-31108.report.html) on one of the pull requests:

![performance_accessibility](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/assets/72577411/8359d00d-7b1e-4621-9cc5-b7ed8d26e0c5)


### Tools Used

<To Be Filled In>

### Key Results

<To Be Filled In>

### Critical Analysis

<To Be Filled In>
