# ADA SQA "To Do List Application"
## This is the front end UI for an application made for the SQA module week 2
### The back end service repo can be found here: https://github.com/kasandrop/ADA-Todo

### Test Suite Results

Main Branch Tests:

![Vitest Testing Status](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/actions/workflows/node.js.yml/badge.svg)
![Vitest Coverage](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/actions/workflows/coverage.yml/badge.svg)
![Google Lighthouse](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/actions/workflows/lighthouse.yml/badge.svg)

### Project Description

Our project is a simple to-do application. It will help manage our daily tasks, which can be categorised into groups such as Personal, Work or Household. Therefore, our to-do app will have the following components: Tasks: Each task has a name, description, and a completion status (yes or no). Labels: There can be Personal, Work, Household label. Relationship: Each task must be associated with one only label, indicating the context or category of the task. This is a one-to-many relationship from tasks to labels. The same label can have zero or more tasks.

### Key Features Front End:
- Create new todo box
- Delete todo box
- Mark todo box as done
- Edit todo description text
- Counts the number of todos open
- Offline capability (by storing the data locally as JSON)
- Online capability (by storing the data in a remote database)
- Label functionality [ incomplete ]

### Key Features Back End:
- Task Management:Create, read, update, and delete (CRUD) tasks.
- Label Management:Create, read, update, and delete (CRUD) label.
- Search task by a label
- Search task by a name
- List all labels.
- List all tasks.
- User will be able to mark a task as completed.

### Requirements:
- When creating a task, providing a description is optional. However, a name is mandatory. If a name is not provided, the task creation process will not proceed, and an error message will be displayed to inform the user about the necessity of providing a name.
- Upon creation, the ‘completion_status’ field of a task is always set to false, indicating that the task is not yet completed. This ensures that every new task starts in an incomplete state.
- Label names must be unique. If a user attempts to create a label with a name that already exists, the creation process will fail. The user will then receive an error message indicating that the chosen label name is already in use
- A label can be created independently and is not required to be associated with any task.
- However, each task must be associated with an existing label. A task cannot be created with a non-existent label.

### Error Handling and Messages

 
| Error                                   | When it occurs                                                                        | Message to display                                                                               | Implication                                                                                                                              |
|-----------------------------------------|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Task creation without a name            | When a user tries to create a task without providing a name.                          | "Task creation failed: A name is required for each task."                                        | The task will not be created until a name is provided. This ensures that all tasks can be properly identified.                           |
| Label creation with a duplicate name    | When a user tries to create a label with a name that already exists.                  | "Label creation failed: The name you've chosen is already in use. Please choose a unique name."  | The label will not be created until a unique name is provided. This ensures that all labels can be uniquely identified.                  |
| Task creation with a non-existent label | When a user tries to create a task with a label that doesn't exist.                   | "Task creation failed: The label you've chosen does not exist. Please choose an existing label." | The task will not be created until an existing label is chosen. This ensures that all tasks are associated with valid labels.            |
| Unknown error                           | When an unexpected error occurs that doesn't match any of the known error conditions. | "An unknown error occurred. Please try again."                                                   | The operation failed due to an unexpected issue. The user is advised to try the operation again or contact support if the error persists |

### API Endpoints for tasks and labels:

These  can be access by accessing [OpenAPI definition](http://localhost:8091/swagger-ui/index.html)

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

- **Programming Languages:**

Front end: Javascript, HTML, CSS

Back end: Java, SQL

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
  
Automatic coverage reports were set up for pull requests, example here: https://github.com/JGrater/ADA-SQA-Todo-Application-UI/pull/4

- **Frameworks/Libraries:**

|Framework/Libraries:|Docs:|
|-----|-----|
|[Nuxt](https://github.com/nuxt/nuxt)|https://nuxt.com/docs/getting-started/introduction|
|[Vue3](https://github.com/vuejs/core)|https://vuejs.org/guide/introduction.html|
|[Spring Boot](https://spring.io/)|https://spring.io/quickstart|
|[Maven](https://maven.apache.org/)|https://maven.apache.org/guides/index.html|

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

The choice of these tools are primarily driven by our familiarity with them. These technologies are well-established in the industry, offering robust features and extensive community support, making them a reliable choice for building efficient and scalable applications.

## Instructions

### How to Clone

``git clone https://github.com/JGrater/ADA-SQA-Todo-Application-UI.git``

``git clone https://github.com/kasandrop/ADA-Todo.git``

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

### [Backend] Requirements to be able to run the app:
1. java version 17
2. Apache Maven 3.3 or above
3. h2 database ![TO MANAGE DATABASE](http://localhost:8091/h2-console)

The Spring boot backend service can be run with the following command :
`mvn compile exec:java`
to stop the service : ctrl+C

## Project Workflow
### Project Management Strategies

For our project workflow, we adopted an agile methodology to ensure a collaborative and transparent process for all team members to review progress. 

#### Ceromonies

We conducted a one-week sprint with daily stand-up meetings at the beginning to coordinate  team members, ensuring all requirements would be met and work was distributed evenly. 

#### Agile Practices

During the sprint, we utilized a Kanban board to visualize tasks for each team member, allowing us to track the progress of individual tasks in real-time. 

![image](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/assets/119420246/5c914fff-2b6b-49b2-9762-34fccc2b7f0b)

## Test Methodologies and Tools

We used an agile testing methodology employed a continuous testing approach, running tests concurrently with development to give feedback and identification of potential issues quickly. Our testing process included the creation of test scenarios related the requirements and acceptance criteria. The iterative testing approach was also aligned with our project workflow adopting an agile methodolgy.

### Types of Testing

|Testing Used|Why?|
|-----|-----|
|Unit|To test blocks of code individually, ensuring each method and process is working as expected|
|Integration|To test if integrating the frontend and javascript logic is working as expected with the Java backend, through REST endpoints, successfully  |

#### Frontend Test Scenarios

|Integration|Unit|ID|Description|
|-----------|----|--|-----------|
|           |                               |1|Search for javascript rendered text|
|           |<span align="center">✅</span>|1.1|Search for title to make sure the list counter starts at 0|
|           |<span align="center">✅</span>|1.2|Search for todo box to make sure the box is added on the screen and visible|
|           |<span align="center">✅</span>|2|Search for the add todo button in the HTML DOM of the component|
|           |<span align="center">✅</span>|3|Check that the add todo button click starts the js function as expected|
|           |<span align="center">✅</span>|4|Check if the local storage is working as expected and changing the title|
|<span align="center">✅</span>|   |5|Check that the add todo button fully finishes without an error and is ran the correct amount of times|

The code for the frontend test scenarios can be found in the following folder:
[Test File](./components/content.test.js)

#### Backend Test Scenarios 

| Integration | Unit |      |                                                                                                                                                                                                                  |
|-------------|------|------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|             |      | 1    | **Configuration tests**                                                                                                                                                                                          |
| []          | []   | 1.1  | Test the Existence of the Database: Verify that the database is correctly set up and can be accessed.                                                                                                            |
|             |      |      |                                                                                                                                                                                                                  |
| []          | [x]  | 2    | **CRUD Operations on Labels: Test scenarios related to creating, reading, updating, and deleting labels. It also includes tests for specific label-related behaviors.**                                          |
| []          | [x]  | 2.1  | Find All Labels: Verify that the repository correctly retrieves all labels.                                                                                                                                      |
| []          | [x]  | 2.2  | Save a Label: Verify that the repository correctly saves a new label.                                                                                                                                            |
| []          | [x]  | 2.3  | Find Label by ID: Verify that the repository correctly retrieves a label by its ID.                                                                                                                              |
| []          | [x]  | 2.4  | Delete a Label: Verify that the repository correctly deletes a label.                                                                                                                                            |
| []          | [x]  | 2.5  | Update Label When ID Exists: Verify that when a label is created with an ID that already exists, the existing label is updated (its name changed) and the total count of labels remains the same                 |
| []          | [x]  | 2.6  | Find Label by Name: Verify that the repository correctly retrieves a label by its name.                                                                                                                          |
|             |      |      |                                                                                                                                                                                                                  |
|             |      | 3    | **CRUD Operations on Tasks:  This section includes test scenarios related to creating, reading, updating, and deleting tasks. It also includes tests for specific task-related behaviors.**                      |    
| []          | [x]  | 3.1  | Find Task by ID: Verify that the repository correctly retrieves a task by its ID.                                                                                                                                |
| []          | [x]  | 3.2  | New Task Has Completion Set to False: Verify that when a new task is created, its completion status is correctly set to false.                                                                                   |
| []          | [x]  | 3.3  | Update Task When ID Exists: Verify that when a task is created with an ID that already exists, the existing task is updated and the total count of tasks remains the same.                                       |
| []          | [x]  | 3.4  | Update Task Name: Verify that when a task’s name is updated, the change is correctly saved in the database.                                                                                                      |
| []          | [x]  | 3.5  | Update Task Completion Status: Verify that when a task’s completion status is updated, the change is correctly saved in the database.                                                                            |
| []          | [x]  | 3.6  | Find All Tasks: Verify that the repository correctly retrieves all records from Task Table.                                                                                                                      |
| []          | [x]  | 3.7  | Find Task by Name: Verify that the repository correctly retrieves a task by its name.                                                                                                                            |
|             |      |      |                                                                                                                                                                                                                  |
|             |      | 4    | **Relationship Between Labels and Tasks: This section includes test scenarios that verify the correct behavior of relationships between labels and tasks.**                                                      |         
| []          | [x]  | 4.1  | Verify that a new task can be created  and saved.                                                                                                                                                                |
| []          | [x]  | 4.2  | Delete Tasks When Label is Deleted: Verify that when a label is deleted, all its associated tasks are also deleted.                                                                                              |
| []          | [x]  | 4.3  | Task References Its Label: Verify that when a task is retrieved by its ID, it correctly references its associated label.                                                                                         |
| []          | [x]  | 4.4  | Label Not Deleted When All Tasks Are Deleted: Verify that when all tasks of a label are deleted, the label itself is not deleted.                                                                                |
| []          | [x]  | 4.5  | Find Tasks by Label: Verify that the repository correctly retrieves all tasks associated with a specific label.                                                                                                  |
|             |      |      |                                                                                                                                                                                                                  |
|             |      | 5    | **Exception Handling: This section includes test scenarios that verify the application correctly handles exceptions.**                                                                                           |                                                                                               |             
| []          | --   | 5.1  | Raise Exception When Deleting Non-Existing Label: Verify that the repository correctly raises an exception when trying to delete a non-existing label.                                                           |                                                       
| []          | --   | 5.2  | Raise Exception When Deleting Non-Existing Task: Verify that the repository correctly raises an exception when trying to delete a non-existing task.                                                             |                                                         
| []          | []   | 5.3  | Raise Exception When Creating Label Without Name: Verify that the repository correctly raises an exception when trying to create a label without providing a name  or empty name field.                          |                                         
| []          | []   | 5.4  | Raise Exception When Creating Task Without Name: Verify that the repository correctly raises an exception when trying to create a task without providing a name or empty name field.                             |                                          
| []          | []   | 5.5  | Raise Exception When Creating Label With Non-Existing ID: Verify that the repository correctly raises an exception when trying to create a label with an ID that doesn't exist (since the ID is auto-generated). |
| []          | []   | 5.6  | Raise Exception When Creating Task With Non-Existing ID: Verify that the repository correctly raises an exception when trying to create a task with an ID that doesn't exist (since the ID is auto-generated).   |
| []          | []   | 5.7  | Raise Exception When Creating Label With Non-Unique Name: Verify that the repository correctly raises an exception when trying to create a label with a name that is not unique.                                 |
| []          | []   | 5.8  | Raise Exception When Updating Non-Existing Label: Verify that the repository correctly raises an exception when trying to update a non-existing label.                                                           |
| []          | []   | 5.9  | Raise Exception When Updating Non-Existing Task: Verify that the repository correctly raises an exception when trying to update a non-existing task.                                                             |
| []          | []   | 5.10 | Reject Task Creation for Non-Existing Label: Verify that the repository correctly rejects the creation of a task for a non-existing label.                                                                       |
   

### Evidence
#### [Front End] Test Results
![frontend_testing_result](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/assets/72577411/4c4e50f4-90d1-4143-b084-0e28f13a2d25)


#### [Front End] Test Coverage Report
![coverage_report](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/assets/72577411/02c587f3-4723-4075-b6d8-5c9a608b059f)

#### [Back End] Test Results

![backend_testing_result](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/assets/119420246/7c3677b3-a0cd-434c-a833-a24ea62534e7)

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

### Tools Used

Checkstyle is a development tool that helps code adhere to the above  standards. 
It has been included and configured in the Maven dependencies to automatically check
for style issues during the build process. If the code does not adhere to the specified rules, 
the build will fail.
The rules -- which were written by Google-- are described in xml file.
This ensures that all code meets the team’s agreed-upon standards before
it is deployed, making Checkstyle a valuable tool for maintaining code quality in a project.

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

#### Pipeline example

![image](https://github.com/JGrater/ADA-SQA-Todo-Application-UI/assets/119420246/7be37ff8-cc84-4b90-ae53-154715e8d168)

### Pull Request Strategies

#### Feature Branch Workflow:

- Each member clones the main repository to their personal space.
- Members would create a new branch for each new feature or bug fix.
- Changes are implemented in the feature branch.
- A pull request is submitted when the feature is ready for review.
- After review and approval, the changes are merged into the main branch.

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
