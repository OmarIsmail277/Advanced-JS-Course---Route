/*
══════════════════════════════════════════════════════════════
🔒 BLOCKING THE MAIN THREAD
══════════════════════════════════════════════════════════════

for (let i = 0; i < 10_000_000_000; i++) {}

console.log("Hello");


⚠️ This heavy loop is Synchronous JavaScript.

Because JavaScript runs on the Main Thread:

    🔒 Heavy JS
       ↓
    Main Thread is blocked
       ↓
    ❌ Rendering is paused
    ❌ User input is delayed
    ❌ Timers cannot execute
    ❌ Other Tasks cannot execute
       ↓
    ⏳ Must wait until the loop finishes


This is one of the reasons a browser page can show:

    ⚠️ "Page is not responding"


📌 The problem isn't simply that the calculation takes
   a long time.

The problem is that the calculation is running on the
Main Thread and preventing the browser from doing its
other work.


══════════════════════════════════════════════════════════════
💡 SOLUTION #1 — BREAK THE WORK INTO CHUNKS
══════════════════════════════════════════════════════════════

Instead of doing one huge blocking operation:

    🔒████████████████████████████████████

Break it into smaller pieces and give the browser
opportunities to handle other work between them:

    🔒██ → 🎨 → 🔒██ → 🎨 → 🔒██ → 🎨 → ...


📌 This allows the browser to process things such as:

    🎨 Rendering
    🖱️ User input
    ⏱️ Timers
    📥 Other Tasks


══════════════════════════════════════════════════════════════
🧵 SOLUTION #2 — WEB WORKERS
══════════════════════════════════════════════════════════════

For very heavy calculations, we can move the work
to a Web Worker.


             🌐 Browser
                  │
        ┌─────────┴─────────┐
        ↓                   ↓
   🖥️ Main Thread       🧵 Worker Thread
        │                   │
   UI / DOM             Heavy calculations
   Events
   Rendering
        │                   │
        └──── postMessage ──┘


📌 A Web Worker allows JavaScript to run in a separate
   background thread instead of the Main Thread.

This means heavy calculations can run without blocking
the page's:

    🖥️ UI
    🖱️ User input
    🎨 Rendering
    🌐 Main-thread work


══════════════════════════════════════════════════════════════
📨 HOW DOES THE WORKER COMMUNICATE?
══════════════════════════════════════════════════════════════

The Worker does NOT directly manipulate the DOM.

Instead:

    Main Thread
         │
         │ postMessage()
         ↓
    🧵 Worker
         │
         │ performs calculation
         │
         ↓
    🧵 Worker
         │
         │ postMessage()
         ↓
    Main Thread
         │
         ↓
       DOM


📌 Communication between the Main Thread and Worker is
   commonly done using:

    postMessage()
    onmessage


So the Worker can calculate the result,
but the Main Thread is responsible for updating the DOM.


══════════════════════════════════════════════════════════════
🧵 A REAL-WORLD EXAMPLE
══════════════════════════════════════════════════════════════

Imagine a page needs to call multiple APIs.

Most requests finish quickly:

    API 1 → ⚡
    API 2 → ⚡
    API 3 → ⚡

But one API returns a HUGE amount of data:

    API 4 → 🐢 HUGE DATA

If processing that huge amount of data happens directly
on the Main Thread:

    🌐 API 4
       ↓
    🔒 Heavy processing
       ↓
    Main Thread blocked
       ↓
    UI becomes slow/frozen


Instead:

    🌐 API 4
       ↓
    🧵 Web Worker
       ↓
    Heavy processing
       ↓
    Result
       ↓
    📩 Main Thread
       ↓
    🖥️ Update UI


This keeps the page responsive while the heavy processing
happens in parallel.


══════════════════════════════════════════════════════════════
⚠️ IMPORTANT — ASYNC ≠ MULTITHREADING
══════════════════════════════════════════════════════════════

This is VERY important:

    ❌ Async does NOT automatically mean multithreading.


Promises:

    Promise
       ↓
    async operation
       ↓
    result
       ↓
    JavaScript callback executes
    on the Main Thread


async/await:

    await
       ↓
    current async function pauses
       ↓
    other work can continue
       ↓
    Promise settles
       ↓
    function continues
    on the Main Thread


So:

    🔄 Asynchronous
        ≠
    🧵 Multithreaded


📌 Promises and async/await help us avoid blocking while
   waiting for asynchronous operations.

But they do NOT create a new JavaScript thread.


🧵 Web Worker = actual separate JavaScript execution thread.


══════════════════════════════════════════════════════════════
🎯 EASY WAY TO REMEMBER
══════════════════════════════════════════════════════════════

Promise / async-await:

    "Don't make me wait here." 😎
    → Continue later.


Web Worker:

    "I'll do this heavy calculation on another thread." 🧵
    → Main Thread stays free.


Main Thread:

    🖥️ UI
    🖱️ Events
    🎨 Rendering
    ⚙️ Main JavaScript


Worker Thread:

    🧮 Heavy calculations
    📊 Data processing
    🔢 CPU-intensive work


🎯 INTERVIEW:

Q: Why can a heavy for loop freeze a web page?

A: Because it is synchronous JavaScript running on the
   Main Thread, blocking rendering, user input, timers,
   and other tasks until it finishes.


Q: How can we handle CPU-heavy work?

A: We can break it into smaller chunks or move it to a
   Web Worker so it doesn't block the Main Thread.


Q: Can a Web Worker directly modify the DOM?

A: No. The Worker communicates with the Main Thread,
   commonly using postMessage(), and the Main Thread
   handles DOM updates.


Q: Does async/await mean JavaScript is running on multiple
   threads?

A: No. async/await provides asynchronous control flow;
   it does not create a new JavaScript thread.


Q: What is the main difference between async code and
   Web Workers?

A: Async code allows work to happen without blocking while
   waiting, whereas a Web Worker provides a separate thread
   for JavaScript execution and is useful for CPU-heavy work.

*/
