"use strict";

const user = {
  name: "Ahmed",
  sayName() {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
};

user.sayName();

/*
The Behind-the-Scenes of setTimeout
When you pass a standard function to setTimeout, you are handing that function over to the browser's Web API (or Node.js runtime). 
When the timer runs out, the environment executes your function.

Even in strict mode, setTimeout explicitly invokes your callback function using .call() or .apply() behind the scenes, 
forcing this to point to the global context (the window object in browsers).

Because setTimeout explicitly sets the context when it calls the function, strict mode's default behavior of turning unassigned this into undefined gets overridden
*/

// Inside the browser's internal timer engine:
callback.apply(window, arguments); // Output: Window object
// Because .apply(window) is an explicit binding, it tells JavaScript: "I don't care if strict mode is on,
// I am explicitly handing you the window object to use as this."
// JavaScript obeys the explicit binding, overriding strict mode's default behavior.
