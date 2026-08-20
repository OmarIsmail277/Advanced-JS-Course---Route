// 🔄 async/await — How await pauses an async function

async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

console.log("C");

test();

console.log("D");

/*
📤 Output:

C
A
D
B


🧠 Why?

1️⃣ console.log("C")
   → Synchronous
   → Output: C

2️⃣ test() is called.

   → The async function starts executing immediately.

3️⃣ console.log("A")
   → Synchronous
   → Output: A

4️⃣ await Promise.resolve()
   → The Promise is already fulfilled.
   → The async function pauses HERE ⏸️

   ⚠️ Only the async function pauses.
   JavaScript itself is NOT blocked.

5️⃣ test() returns control to the caller.

6️⃣ console.log("D")
   → Synchronous
   → Output: D

7️⃣ The current Task finishes.

8️⃣ The continuation of the async function:

      console.log("B");

   is scheduled as a Microtask.

9️⃣ Microtask executes.
   → Output: B


📌 Final execution order:

C → A → D → B


🔥 KEY IDEA:

await pauses the CURRENT async function,
not the entire JavaScript execution.

*/

// ============================================================
// 2️⃣ await with a non-Promise value
// ============================================================

async function foo() {
  console.log("Foo Start");

  await 0;

  console.log("Foo end");
}

console.log("Start code");

foo();

console.log("End Code");

/*
📤 Output:

Start code
Foo Start
End Code
Foo end


🧠 Why?

1️⃣ "Start code"
   → Synchronous
   → Output: Start code

2️⃣ foo() is called.
   → The async function starts executing immediately.

3️⃣ "Foo Start"
   → Synchronous
   → Output: Foo Start

4️⃣ await 0
   → 0 is NOT a Promise.

   JavaScript effectively treats it as an already
   fulfilled Promise for the purpose of await.

   The async function pauses ⏸️

5️⃣ "End Code"
   → The caller continues executing
   → Output: End Code

6️⃣ Current Task finishes.

7️⃣ The rest of foo():

      console.log("Foo end");

   → continues as a Microtask.

8️⃣ Output: Foo end


📌 Final:

Start code
Foo Start
End Code
Foo end


🎯 INTERVIEW:

Q: Does await only work with Promises?

A: await can receive any value.

   If the value isn't a Promise, it is effectively
   treated as an already fulfilled Promise, but the
   continuation still happens asynchronously.


Q: Does await block JavaScript?

A: No.

   await pauses the current async function, while
   JavaScript can continue executing other work.


Q: What happens to the code after await?

A: It resumes asynchronously, as a Microtask, after
   the awaited Promise settles.


💡 EASY WAY TO REMEMBER:

async function:

   Before await
        ↓
   executes normally ⚡
        ↓
      await
        ↓
   function pauses ⏸️
        ↓
   other JS can run
        ↓
   Promise settles
        ↓
   rest of function → Microtask 🧹

   Side Note ⚠️: await normally requires an async function, but ES modules support Top-Level await.
*/
