### About the task
Imo, there are two major implementations:
1. Component based pattern, where service which "controls steps proccess" is injected into components.
2. Tradional pattern with shared step route, model, etc.

This repository shows implementation of the second pattern.

Generally talking, it took more time to re-read/refresh all Ember.js concepts and set up the environment (configure ember-cli proxy, especially 'transparentProxy' param ;) than to implement the task itself.

### To run the task
As usual follow common steps:
```
npm install
npm run start
```
and visit http://localhost:4200/

![Application gif](/application.gif?raw=true)