# JavaScript Type Coercion Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to type coercion and null values when performing addition.  The original code incorrectly handles null values and performs implicit type coercion, potentially leading to unexpected results.

## Bug Description
The `foo` function aims to add two numbers.  However, it incorrectly handles null values and does not explicitly check for the type of inputs before the addition.

## Bug Solution
The solution implements robust type checking to ensure both inputs are numbers before performing addition and handles the case where either input is null by returning null or an appropriate default value.

## How to reproduce
1. Clone this repository.
2. Run the `bug.js` file with Node.js. Observe the unexpected behavior with null values or non-numeric inputs.
3. Run the `bugSolution.js` file. Observe the correct handling of inputs and consistent behavior.
