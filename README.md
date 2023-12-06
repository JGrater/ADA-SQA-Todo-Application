# ADA SQA "To Do List Application"
## This is an application made for the SQA module week 2

### Test Suite Results

Main Branch:
![Vitest Testing Status](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/actions/workflows/node.js.yml/badge.svg)

Final Branch:
![Vitest Testing Status](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/actions/workflows/node.js.yml/badge.svg?branch=final)

### Key Features:
- Create new todo box
- Delete todo box
- Mark todo box as done
- Edit todo description text
- Offline capability (by storing the data locally as JSON)
- Online capability (by storing the data in a remote database)

### Screenshots/Video
https://github.com/JGrater/ADA-SQA-Todo-Application-UI/assets/72577411/b014216e-bc97-4836-a01e-afb552209d6e

## Team Description

<To Be Filled In>

### Team Members

- **Marcin Wasilewski**
  - Role/Responsibility: <To Be Filled In>
  - Percentage Contribution: 25%

- **Jason Grater**
  - Role/Responsibility: <To Be Filled In>
  - Percentage Contribution: 25%

- **James Brown**
  - Role/Responsibility: <To Be Filled In>
  - Percentage Contribution: 25%
 
- **Wares Islam**
  - Role/Responsibility: <To Be Filled In>
  - Percentage Contribution: 25%

...

## Tools Used

- **Version Control:** <To Be Filled In>
- **Testing:** 

|Testing:|Docs:|
|-----|-----|
|[vitest](https://github.com/vitest-dev/vitest)|https://vitest.dev/|
|[@vue/test-utils](https://github.com/vuejs/test-utils)|https://test-utils.vuejs.org/|
|[@testing-library/vue](https://github.com/testing-library/vue-testing-library)|https://testing-library.com/docs/vue-testing-library/intro/|
|[@nuxt/test-utils](https://github.com/nuxt/test-utils)|https://nuxt.com/docs/getting-started/testing|
|[jsdom](https://github.com/jsdom/jsdom)|https://github.com/jsdom/jsdom|
|[happy-dom](https://github.com/capricorn86/happy-dom)|https://github.com/capricorn86/happy-dom|

- **Test Code Coverage:** <To Be Filled In>
- **Frameworks/Libraries:**

|Framework:|Docs:|
|-----|-----|
|[Nuxt](https://github.com/nuxt/nuxt)|https://nuxt.com/docs/getting-started/introduction|
|[Vue3](https://github.com/vuejs/core)|https://vuejs.org/guide/introduction.html|

- **Linters:** 

|Linters:|Docs:|
|-----|-----|
|[Volar](https://github.com/vuejs/language-tools)|https://marketplace.visualstudio.com/items?itemName=Vue.volar/|

- **Project Management Tools:** <To Be Filled In>
- **Performance and Accessibility Audit:** <To Be Filled In>

## Instructions

<To Be Filled In>

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


<To Be Filled In>

## Project Workflow

<To Be Filled In>

### Project Management Strategies

<To Be Filled In>

### Ceremonies

<To Be Filled In>

### Retrospectives

<To Be Filled In>

### Agile Practices

<To Be Filled In>

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

<To Be Filled In>

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
          - 16.x
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

### Setup

<To Be Filled In>

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

<To Be Filled In>

### Tools Used

<To Be Filled In>

### Key Results

<To Be Filled In>

### Critical Analysis

<To Be Filled In>
