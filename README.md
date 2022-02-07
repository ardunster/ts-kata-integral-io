# Basic framework for writing tested code katas in Typescript

This is a nearly minimal setup for coding a kata in Typescript. It uses NPM as a package manager, Jest as the test framework and has the Typescript version of StandardJS installed for formatting and linting.

This fork contains code and tests for the kata described in katadetails.md.

## Installation

These installation instructions assume that you already have git and a current version of NPM installed.

Clone the repository with the git command `git clone https://github.com/ardunster/ts-kata-integral-io.git`.

Then install with `npm install` inside the cloned directory.

## Adding code and tests

For the most basic use, simply add functions to `kata.ts`, and import them in `kata.test.ts` for testing. Additional files may be created. Jest will automatically run tests in any file inside the src directory ending in `.test.ts`.

## Running tests

Use the command `npm run test` to run all Jest tests from the terminal.

## Building code

If you need to build the code separately from running tests, use `npm run build` to output files and source maps to the `./build` directory.
