// 🎨 Demo — JavaScript Blocking Rendering

/*
📄 HTML:

<button id="btn">Start</button>
<div id="status">Idle</div>


📄 JavaScript:
*/

const btn = document.getElementById("btn");
const myStatus = document.getElementById("status");

btn.addEventListener("click", () => {
  myStatus.textContent = "Working ...";

  const startTime = Date.now();

  while (Date.now() - startTime < 5000) {}

  myStatus.textContent = "Done ...";
});

/*
⚠️ Note:

The browser may report something like:

[Violation] 'click' handler took ~5000ms


📤 What do we see?

We expect:

Idle
  ↓
Working ...
  ↓
Done ...

But visually we see:

Idle
  ↓
Done ...


🤔 Why don't we see "Working ..."?


1️⃣ User clicks the button.

2️⃣ The click handler starts executing on the Main Thread.

3️⃣ We change:

   myStatus.textContent = "Working ...";


   The DOM has been updated internally,
   but the browser hasn't necessarily painted
   that change to the screen yet.


4️⃣ Immediately after that, we start the 5-second
   synchronous while loop:

   while (Date.now() - startTime < 5000) {}

   🔒 The Main Thread is blocked for ~5 seconds.


5️⃣ Because the Main Thread is blocked, the browser
   doesn't get an opportunity to perform the rendering
   needed to show "Working ...".


6️⃣ After 5 seconds, the loop finishes.

7️⃣ We change the text again:

   myStatus.textContent = "Done ...";


8️⃣ The click handler finally finishes.

9️⃣ The browser gets an opportunity to render.

   🎨 It paints the latest state:

   "Done ..."


So the user never gets to visually see:

"Working ..."


📌 KEY IDEA:

Changing the DOM ≠ immediately painting the change
to the screen.

The browser needs an opportunity to perform rendering.

But our long-running JavaScript task is blocking
the Main Thread.


*/

/*
❓ What if we put the blocking code inside a Promise?

For example:

myStatus.textContent = "Working ...";

Promise.resolve().then(() => {

  // blocking code
  const startTime = Date.now();

  while (Date.now() - startTime < 5000) {}

  myStatus.textContent = "Done ...";

});


Would that solve the problem?

❌ No.


Why?

Promise callbacks are Microtasks.

And Microtasks are processed before the browser moves
on to the rendering step.

So:

Click Task
    ↓
DOM → "Working ..."
    ↓
Microtask
    ↓
🔒 5-second blocking loop
    ↓
Microtask finishes
    ↓
🎨 Browser can finally render
    ↓
Latest state = "Done ..."


Therefore, we still see:

"Done ..."

instead of:

"Working ..."


📌 KEY IDEA:

Putting expensive synchronous work inside a Microtask
does NOT solve the rendering problem.

Microtasks can also prevent the browser from reaching
the rendering stage if they keep the Main Thread busy.


*/

/*
💡 So what's the solution?

The solution is NOT simply:

"Put everything inside a Promise."


Instead:

👉 Break the work into smaller pieces and let the browser
   get opportunities to render between them.

In other words:

Don't block the Main Thread with one huge task.


Another option is:

🎨 requestAnimationFrame()


requestAnimationFrame() is a Browser API specifically
related to rendering and drawing frames.

It allows us to schedule code to run before the browser's
next repaint.

It is commonly used for:

- Animations
- Games 🎮
- Visual updates
- Smooth rendering


📌 requestAnimationFrame() is NOT simply another
   Task Queue mechanism.

It is closely tied to the browser's rendering process.


⚠️ This is a more advanced topic and we'll explore it
   later when needed.

The instructor previously used requestAnimationFrame()
to solve a rendering problem caused by a package that
was interfering with the normal rendering flow.


🎯 INTERVIEW:

Q: Why don't we see "Working ..." even though we changed
   textContent before the 5-second loop?

A: Because the Main Thread is blocked by the synchronous
   loop, so the browser doesn't get an opportunity to
   render the intermediate state before the DOM is changed
   again to "Done ...".


Q: Would putting the blocking code inside a Promise solve it?

A: No. Promise callbacks are Microtasks, and Microtasks
   are processed before the browser gets to rendering.
   The blocking work would still prevent the browser
   from rendering the intermediate state.


Q: What is requestAnimationFrame() used for?

A: It schedules a callback to run in coordination with
   the browser's rendering/repaint cycle, making it useful
   for animations and visual updates.


*/
