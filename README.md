## Overview

This repository contains a simple, yet robust, Cypress testing framework designed with best practices in mind. 
The framework leverages the Page Object Model (POM) for better maintainability, readability, and scalability of the tests. 
Additionally, dynamic data fetching from the fixtures folder ensures flexibility and reusability of test data.

## Key Features and Best Practices

### Page Object Model (POM)

By using POM, we ensure that our tests are easy to maintain and scale. 
Elements and actions related to a specific page are encapsulated within dedicated classes, promoting reusability and reducing code duplication.

### Dynamic Data from Fixtures

Test data ( username and password) is stored in the `fixtures` folder in JSON files and is read dynamically within the tests. 
This approach enhances test flexibility and allows easy manipulation of test data without altering the test code.

### Custom Commands

The `support/commands.js` file defines custom Cypress commands to encapsulate actions and assertions, further simplifying the test cases and improving readability.
