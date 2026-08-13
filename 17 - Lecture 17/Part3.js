/* =================================================================================================
   ✂️ DEAD CODE ELIMINATION
   =================================================================================================

Another optimization that an optimizing compiler may perform is:

✂️ Dead Code Elimination (DCE)


❓ What is dead code?

Dead code is code whose result is never used and whose execution has
no observable effect on the program.

If the engine can prove that some code is unnecessary, it may remove
that code from the optimized version.


/* ================================================================================================
   🔹 EXAMPLE
   ================================================================================================

function calculate() {
  const total = 10 * 20;

  const unusedCode = 50 + 60;

  return total;
}


Here:

const total = 10 * 20;

is used:

return total;


But:

const unusedCode = 50 + 60;

is never used.

If the engine can determine that evaluating this expression has no
observable effect, it may remove it from the optimized code.

Conceptually:

function calculate() {
  const total = 10 * 20;

  return total;
}


The original source code is NOT modified.

Only the optimized internal representation/code may omit the
unnecessary computation.


/* ================================================================================================
   ⚠️ BEWARE: SIDE EFFECTS!
   ================================================================================================

This is VERY important.

The compiler cannot simply say:

"This value isn't used → delete it."

It must consider whether executing the code produces a:

⚠️ SIDE EFFECT


❓ What is a side effect?

A side effect is an observable change or action caused by evaluating
an expression/function, beyond simply producing its return value.

Examples include:

🖥️ console.log()
💾 Writing to localStorage
🌐 Sending a network request
📝 Modifying an external variable
🏠 Modifying an object outside the function
📦 Changing application state
📂 Reading/writing files in Node.js


If code has a side effect, removing it could change the program's
observable behavior.


/* ================================================================================================
   🔥 EXAMPLE — FUNCTION WITH A SIDE EFFECT
   ================================================================================================

function getValue() {
  console.log("get value");
  return 100;
}


function calc() {
  const x = getValue();

  return 10;
}


At first glance:

const x = getValue();


looks like dead code because:

❌ `x` is never used.


But the compiler cannot simply remove:

getValue();


Why?

Because calling `getValue()` produces an observable side effect:

console.log("get value");


If the engine removed the call:

function calc() {
  return 10;
}


then:

console.log("get value");


would never happen.

That changes the observable behavior of the program.

Therefore, the call cannot simply be treated as dead code.


/* ================================================================================================
   🧠 IMPORTANT DISTINCTION
   ================================================================================================

There are two different things here:

1️⃣ The RETURN VALUE may be unused.

const x = getValue();


`x` is never used.

BUT...

2️⃣ The FUNCTION CALL itself may have a SIDE EFFECT.

getValue();


Therefore:

❌ "Unused result" does NOT automatically mean "dead code."


The optimizer must determine whether removing the operation would
change observable behavior.


/* ================================================================================================
   💾 ANOTHER EXAMPLE — localStorage
   ================================================================================================

Suppose:

function saveUser() {
  localStorage.setItem("username", "Omar");
  return true;
}


function app() {
  const result = saveUser();

  return 10;
}


`result` is never used.

But:

saveUser();


has a side effect:

💾 It changes localStorage.


Removing the function call would change the state of the application.

So the optimizer cannot simply remove it merely because `result`
is unused.


/* ================================================================================================
   🌐 ANOTHER EXAMPLE — API REQUEST
   ================================================================================================

function sendData() {
  fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({ name: "Omar" })
  });
}


Even if we don't use the returned value:

sendData();


the operation itself has an observable effect:

🌐 A network request is sent.

Therefore, the call cannot simply be removed as dead code.


/* ================================================================================================
   ⚠️ IMPORTANT CORRECTION
   ================================================================================================

Don't define a side effect only as:

❌ "My main operation can affect an outer value."


That's one example, but side effects are broader.

A better definition:

✅ A side effect is an observable interaction with the program's
state or the outside world that occurs when an expression/function
is evaluated.


Examples:

let count = 0;

function increment() {
  count++;             // modifies external state
}


or:

console.log("Hello");  // observable output


or:

localStorage.setItem(...); // external state


or:

fetch(...);            // network activity


or in Node.js:

fs.writeFileSync(...); // filesystem change


/* ================================================================================================
   🎯 WHY DOES THE COMPILER CARE?
   ================================================================================================

The compiler wants to optimize:

🚀 Performance
💾 Memory usage
⚡ Execution


But it must preserve the program's observable behavior.

So the optimizer essentially needs to ask:

> "Can I remove this code without changing what the program can
> observe?"


If:

✅ No observable effect
→ potentially removable.


If:

⚠️ Observable side effect
→ cannot simply remove it.


/* ================================================================================================
   🧩 DEAD CODE ELIMINATION + OTHER OPTIMIZATIONS
   ================================================================================================

DCE can work together with other optimizations.

Example:

function calculate() {
  const unused = 10 * 20;
  const total = 5 + 5;

  return total;
}


The optimizer may be able to determine:

unused → never used
10 * 20 → no side effect


So:

✂️ Remove unused computation


And potentially:

5 + 5
 ↓
10

through constant folding.


Conceptually:

function calculate() {
  return 10;
}


Again:

⚠️ This is a conceptual view of what the optimized code may achieve,
not a claim that V8 literally rewrites your JavaScript source file.


/* ================================================================================================
   🎯 INTERVIEW NOTES
   ================================================================================================

Q: What is Dead Code Elimination?

A:

> Dead Code Elimination is an optimization that removes code whose
> results are unnecessary and whose execution has no observable effect.


--------------------------------------------------

Q: Can an unused variable always be removed?

❌ No.

> The compiler must consider whether evaluating its initializer or
> expression produces side effects.


--------------------------------------------------

Q:

const x = getValue();

If `x` is never used, can the compiler always remove it?

❌ No.

If `getValue()` has side effects, removing the call would change
observable behavior.


--------------------------------------------------

Q: What is a side effect?

A:

> A side effect is an observable change or interaction caused by
> evaluating an expression, such as modifying state, logging,
> writing to storage, making a network request, or performing I/O.


--------------------------------------------------

Q: Why can't the compiler remove every unused expression?

A:

> Because the expression may have side effects. The optimizer must
> preserve the program's observable behavior.


/* ================================================================================================
   🧠 THE BIG IDEA
   ================================================================================================

                 📝 JavaScript Code
                         │
                         ▼
                  🔍 Analyze Code
                         │
                         ▼
               "Is this code necessary?"
                         │
                    ┌────┴────┐
                    │         │
                   YES        NO
                    │         │
                    │    "Does it have
                    │     side effects?"
                    │         │
                    │     ┌───┴───┐
                    │    YES      NO
                    │     │        │
                    │     │        ▼
                    │     │   ✂️ Remove
                    │     │      Code
                    │     │
                    ▼     ▼
                Preserve Observable Behavior


🎯 Remember:

❌ Unused ≠ automatically dead

The important question is:

> "Does executing this code have an observable effect?"

If not, the optimizer may be able to eliminate it.

If yes, removing it could change the program's behavior.
*/
