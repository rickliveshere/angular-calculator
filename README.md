# Calculator App

A sample Angular application to generate a calculator with Jasmine tests.

## Get started

* Install Angular CLI by running `npm install -g @angular/cli`.
* Install project packages by running `npm install`.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

NOTE - Some of the tests intentionally fail to show the value in having the tests in the first place - it can be assumed that some math operations with decimal numbers should just work, however tests demonstrate Javascript has difficulty with floating point accuacy. A third party library such as [Big Number](https://github.com/MikeMcl/bignumber.js/) may solve this issue 
