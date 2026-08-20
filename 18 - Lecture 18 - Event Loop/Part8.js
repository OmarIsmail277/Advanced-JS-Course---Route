// 🎨 Rendering & the Main Thread

/*
🌐 The Browser does much more than execute JavaScript.

The browser is also responsible for things such as:

- 🎨 Style calculations
- 📐 Layout (calculating the position and size of elements)
- 🖌️ Painting pixels to the screen
- 🧩 Compositing layers
- ... and much more


📌 These browser activities are closely related to the
   Main Thread, which also executes JavaScript.

That's why heavy JavaScript can affect rendering and make
the page feel slow or unresponsive.


🔄 Simplified Browser Event Loop Cycle:

        Task
         ↓
    JavaScript (⚙️ Execute JavaScript)
         ↓
    Microtasks (🧹 Process Microtasks)
         ↓
   🎨 Rendering (🎨 Browser may Render)
         ↓
   ▶️ Next Task
      (Next Tick)


⚠️ IMPORTANT:

Rendering is NOT guaranteed to happen after every Task/Tick.

The browser decides when rendering is appropriate based on
things such as timing, whether there are visual updates,
and the browser's rendering strategy.

So think of it as:

Task → JavaScript → Microtasks → [Rendering] → Next Task

                    ↑
             Rendering may happen


📌 The important idea:

The Main Thread is responsible for executing JavaScript
AND performing important browser work related to rendering.

Therefore, a long-running JavaScript task can block
the Main Thread and prevent the browser from rendering
smoothly.


🎨 The Rendering Pipeline includes steps such as:

JavaScript
   ↓
Style Calculation
   ↓
Layout
   ↓
Paint
   ↓
Composite
   ↓
🖥️ Screen


💡 A practical demo showing how JavaScript can affect
   rendering will be covered in the next part, insha'Allah.

*/
