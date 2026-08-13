// =================================================================================================
// 🧠 EXECUTION CONTEXT
// =================================================================================================

/*
After understanding:

📝 Source Code
   ↓
🔍 Parsing
   ↓
🌳 AST
   ↓
📜 Bytecode
   ↓
🔥 Execution


we now need to understand:

❓ WHERE does JavaScript actually execute our code?

The answer leads us to:

🧠 EXECUTION CONTEXT


An Execution Context is the environment in which JavaScript code is
evaluated and executed.

You can think of it as the engine's internal setup for running a
particular piece of code.


/* ================================================================================================
   🌍 1. GLOBAL EXECUTION CONTEXT
   ================================================================================================

Consider:

const name = "nour";

function sayHi() {
  const message = "hello " + name;

  console.log(message);
}

sayHi();


Before the function `sayHi()` is called, JavaScript has the:

🌍 GLOBAL EXECUTION CONTEXT


Conceptually, it is responsible for executing the top-level code.

It has access to things such as:

📦 Global bindings
🌎 Global scope
🔗 The surrounding lexical environment


So conceptually:

🌍 Global Execution Context
│
├── name → "nour"
│
└── sayHi → function


Then the engine reaches:

sayHi();


and calls the function.


/* ================================================================================================
   📦 2. FUNCTION EXECUTION CONTEXT
   ================================================================================================

When JavaScript calls:

sayHi();


a new execution context is created for that function call.

🧠 Function Execution Context


Conceptually, it contains information needed to execute that specific
function invocation, such as:

📦 Local variables / bindings
📥 Function parameters
🔗 Lexical environment / scope information
👤 `this` value
📍 Execution state / other internal execution information


Inside:

function sayHi() {
  const message = "hello " + name;

  console.log(message);
}


the function execution context has access to:

message


And because of lexical scoping, it can also access:

name


from its outer/global environment.


Conceptually:

🌍 Global Context
│
├── name → "nour"
│
└── sayHi
      │
      ▼
📦 Function Context
│
└── message → "hello nour"


/* ================================================================================================
   🔄 3. EXECUTION CONTEXTS ARE CREATED FOR DIFFERENT EXECUTION SITUATIONS
   ================================================================================================

At a simplified level, you'll commonly hear about:

🌍 Global Execution Context
📦 Function Execution Context
📦 Other execution contexts related to constructs such as modules/eval


For now, the most important distinction is:

🌍 Global code
→ Global Execution Context

📞 Function call
→ Function Execution Context


/* ================================================================================================
   ⏱️ 4. TWO PHASES OF AN EXECUTION CONTEXT
   ================================================================================================

A useful mental model is that execution context setup can be understood
in two major phases:

1️⃣ Creation Phase
2️⃣ Execution Phase


                    🧠 Execution Context
                           │
                  ┌────────┴────────┐
                  ▼                 ▼
            🏗️ Creation         ▶️ Execution
               Phase               Phase
                  │                 │
             Prepare the       Execute the
             environment        code
                  │                 │
             Bindings,          Statements,
             scope info,        expressions,
             etc.               function calls...


⚠️ This is a conceptual model used to understand JavaScript behavior.
Modern engines internally use more sophisticated representations.


/* ================================================================================================
   🏗️ 5. CREATION PHASE
   ================================================================================================

During the creation/setup phase, the engine prepares the environment
needed to execute the code.

Conceptually, this includes things such as:

📦 Creating bindings
🔗 Setting up lexical environments / scope relationships
👤 Determining the relevant `this` binding
📥 Setting up function parameters
⚙️ Preparing other execution-related information


This preparation is one of the things that helps explain:

🔥 HOISTING


/* ================================================================================================
   🚀 6. HOISTING
   ================================================================================================

Example:

console.log(result); // undefined

var result = 10;


Many beginners imagine JavaScript literally changing the code to:

var result;

console.log(result);

result = 10;


❌ That's not the best mental model.

JavaScript does NOT literally move your source-code line to another
location.

Instead, think:

During the setup/creation of the relevant environment, the binding
for `result` is created.

For `var`, that binding is initialized with:

undefined


Then execution begins:

console.log(result);
        ↓
undefined

result = 10;


So:

🧠 HOISTING ≠ physically moving the line

Instead:

> The binding is available during the relevant setup phase before the
> execution reaches the declaration.


/* ================================================================================================
   🟡 7. `var` AND HOISTING
   ================================================================================================

Example:

console.log(result);

var result = 10;


Conceptually:

🏗️ Creation Phase

result → undefined


▶️ Execution Phase

console.log(result);
        ↓
undefined

result = 10;
        ↓
result → 10


That's why:

console.log(result); // undefined


doesn't immediately produce:

ReferenceError


/* ================================================================================================
   ⚠️ IMPORTANT: `let` AND `const`
   ================================================================================================

Don't generalize the `var` behavior to `let` and `const`.

Example:

console.log(age);

let age = 30;


This produces:

❌ ReferenceError


Why?

`let` and `const` bindings are also created during the setup phase,
but they are not initialized in the same way as `var`.

Before execution reaches their declaration, they are in the:

⏳ TEMPORAL DEAD ZONE (TDZ)


So:

console.log(age);

tries to access `age` while it is still uninitialized.

Result:

❌ ReferenceError


This distinction is very important for interviews.


/* ================================================================================================
   🧩 8. FUNCTION DECLARATIONS
   ================================================================================================

Function declarations are also prepared during the setup phase.

Example:

sayHi();

function sayHi() {
  console.log("Hi");
}


This works because the function declaration is available before the
execution reaches its position.


Conceptually:

🏗️ Creation Phase

sayHi → function


▶️ Execution Phase

sayHi();
   ↓
"Hi"


This is another behavior commonly explained using hoisting.


/* ================================================================================================
   🔗 9. SCOPE VS EXECUTION CONTEXT
   ================================================================================================

Don't confuse these two concepts.

📌 SCOPE

Scope answers:

> "Where can this variable be accessed?"


📌 EXECUTION CONTEXT

Execution context answers more broadly:

> "What environment/state is set up so this particular code can
> execute?"


For example:

const name = "nour";

function sayHi() {
  const message = "hello " + name;
}


The function has its own local binding:

message


and, through lexical scoping, it can access:

name


from the outer environment.


/* ================================================================================================
   🎯 INTERVIEW NOTES
   ================================================================================================

Q: What is an Execution Context?

A:

> An execution context is the environment in which JavaScript code is
> evaluated and executed. It contains the information needed to run
> that code.


--------------------------------------------------

Q: What happens when a function is called?

A:

> A new function execution context is created for that invocation,
> with its own local bindings and execution-related information.


--------------------------------------------------

Q: What are the two phases commonly used to explain an execution
context?

A:

> Creation phase and execution phase.


Creation:
🏗️ Prepare the environment and bindings.

Execution:
▶️ Execute the code.


--------------------------------------------------

Q: What is hoisting?

A:

> Hoisting describes the behavior where declarations/bindings are
> processed during the setup of their execution environment, making
> certain declarations available before their textual position is
> reached during execution.


⚠️ Don't say:

❌ "JavaScript moves the declarations to the top."


Better:

✅ "The bindings are created/processed during the setup phase."


--------------------------------------------------

Q: Why does this work?

console.log(x);

var x = 10;


A:

> The `var` binding is created during environment setup and initialized
> to `undefined` before execution reaches the assignment.


--------------------------------------------------

Q: Why does this fail?

console.log(x);

let x = 10;


A:

> The `let` binding exists but remains uninitialized until execution
> reaches its declaration. Accessing it before initialization causes a
> ReferenceError due to the Temporal Dead Zone.


/* ================================================================================================
   🗺️ BIG PICTURE
   ================================================================================================

                         📝 JavaScript
                              │
                              ▼
                       🌍 Global Code
                              │
                              ▼
                  🧠 Global Execution Context
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
              🏗️ Creation          ▶️ Execution
                 Phase                 Phase
                    │                   │
              Prepare bindings     Run statements
                    │                   │
                    └─────────┬─────────┘
                              │
                              ▼
                         sayHi()
                              │
                              ▼
                    📦 Function Execution
                         Context
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
              🏗️ Creation          ▶️ Execution
                    │                   │
              Prepare local        Run function
               environment            body
                    │                   │
                    ▼                   ▼
             message binding      console.log(...)
                    │
                    ▼
              🔗 Access `name`
              from outer scope


🎯 FINAL IDEA:

JavaScript doesn't simply "run lines one by one" with no preparation.

For a piece of code to execute, the engine establishes the relevant
execution environment.

The simplified mental model is:

🏗️ Creation Phase
→ prepare the environment

▶️ Execution Phase
→ execute the code


And this model helps explain important JavaScript behavior such as:

🔥 Hoisting
🔗 Scope
📦 Local variables
👤 `this`
📞 Function calls
⏳ Temporal Dead Zone
*/
