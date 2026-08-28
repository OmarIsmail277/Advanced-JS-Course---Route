/* =================================================================================================
   🌳 AST — Abstract Syntax Tree
   =================================================================================================

📌 AST stands for:

Abstract Syntax Tree


/* ================================================================================================
   🔹 What Does "Abstract Syntax Tree" Mean?
   ================================================================================================

Let's break the name into three parts:


1️⃣ Abstract
------------

"Abstract" means that the AST does NOT keep every detail from the original
source code.

It keeps the information that is important for understanding the program's
structure and meaning.

For example:

const age = 33;

const age     =      33;

These contain unnecessary formatting differences (such as extra spaces),
but they represent the same program structure.

The AST focuses on the important syntactic information rather than preserving
the original formatting.

💡 Comments and most whitespace are also not represented in the normal AST
structure.


2️⃣ Syntax
----------

"Syntax" refers to the structure and grammatical rules of the code.

The AST represents things such as:

• Variable declarations
• Function declarations
• Expressions
• Operators
• Function calls
• Conditions
• Loops
• etc.


3️⃣ Tree
--------

The information is represented as a TREE.

Each part of the program is represented by a NODE.

Nodes are connected to other nodes according to their relationships.

So:

🌳 AST = An abstract tree representation of the program's syntax.


/* ================================================================================================
   🧩 Example 1 — Variable Declaration
   ================================================================================================

Code:

const age = 33;

Conceptually, the AST looks like:

Program
└── VariableDeclaration
    └── VariableDeclarator
        ├── Identifier
        │   └── name: "age"
        │
        └── NumericLiteral
            └── value: 33


📌 What does this tell us?

The AST understands that:

• `age` is an Identifier.
• `33` is a Numeric Literal.
• `age` is being declared.
• `33` is the value assigned to `age`.
• `const` represents a constant variable declaration.

It doesn't just see:

"const age = 33"

as text anymore.

It understands the STRUCTURE of the code.


/* ================================================================================================
   🧩 Example 2 — Expression
   ================================================================================================

Code:

const result = 10 + 20;

Conceptually:

Program
└── VariableDeclaration
    └── VariableDeclarator
        ├── Identifier
        │   └── name: "result"
        │
        └── BinaryExpression
            ├── operator: "+"
            ├── left
            │   └── NumericLiteral
            │       └── value: 10
            │
            └── right
                └── NumericLiteral
                    └── value: 20


💡 The AST understands that:

10 + 20

is a BinaryExpression.

`+` → Operator
`10` → Left operand
`20` → Right operand


/* ================================================================================================
   🧩 Example 3 — Unary Expression
   ================================================================================================

Code:

!isActive

The AST represents this as a:

UnaryExpression

with:

operator: "!"
argument: Identifier("isActive")

Conceptually:

UnaryExpression
├── operator: "!"
└── argument
    └── Identifier
        └── name: "isActive"


📌 Unary Expression
→ An expression involving ONE operand.

Examples:

!isActive
typeof user
delete user.name
-5


/* ================================================================================================
   🔍 Explore ASTs Yourself
   ================================================================================================

You can see the real AST generated from JavaScript code using:

🌐 AST Explorer
https://astexplorer.net/

Paste JavaScript code there and inspect the actual AST nodes.

💡 This is extremely useful when learning:

• JavaScript Engines
• Babel
• ESLint
• Prettier
• Code transformation
• Static analysis
*/

/* ================================================================================================
   🤖 Why Is the AST Important?
   ================================================================================================

The AST is the bridge between:

📝 Source Code
        ↓
🔍 Parser
        ↓
🌳 AST
        ↓
⚙️ Other tools / engine stages


The AST allows programs to understand the STRUCTURE of your code instead
of treating it as a simple string.

This is extremely useful for:

• JavaScript Engines
• Babel
• ESLint
• Prettier
• TypeScript
• Minifiers
• Linters
• Code transformation tools


/* ================================================================================================
   🦋 What Is Babel?
   ================================================================================================

📌 Babel is a JavaScript compiler/toolchain that can transform modern
JavaScript syntax into code that older environments can understand.

For example:

const greeting = name => `Hello ${name}`;


Babel can transform modern syntax into older JavaScript syntax such as:

var greeting = function (name) {
    return "Hello " + name;
};


💡 The exact output depends on Babel's configuration and the target
environment.

The important idea is:

Modern JavaScript
        ↓
      Babel
        ↓
Transformed JavaScript
        ↓
Older/target environment


/* ================================================================================================
   🧠 Does Babel Just Find & Replace Text?
   ================================================================================================

❌ No!

Babel cannot safely transform JavaScript using simple text replacement.

It needs to understand the STRUCTURE of the code.

That's why Babel works with ASTs.

The general process is:

Source Code
     ↓
Parsing
     ↓
AST
     ↓
Transformation
     ↓
New/Modified AST
     ↓
Code Generation
     ↓
Transformed JavaScript


/* ================================================================================================
   🔥 Why Can't Babel Just Search for Words?
   ================================================================================================

Imagine we have:

const user = {
    name: "Omar"
};

function createUser() {
    const user = {};
}


If Babel simply searched for the word:

"user"

it wouldn't know whether a particular occurrence is:

• A variable name
• An object property
• A function parameter
• A different variable in another scope
• Part of another syntactic structure

The AST gives Babel the STRUCTURE and CONTEXT of each occurrence.

Therefore, Babel can transform specific syntax safely.

💡 It isn't simply:

"Find this text → Replace it."

It's more like:

"Find this kind of syntax node → Transform it → Generate new code."


/* ================================================================================================
   🔄 The Big Picture
   ================================================================================================

JavaScript Source Code
          │
          ▼
     📝 Tokenization
          │
          ▼
    🔹 Typed Tokens
          │
          ▼
       🔍 Parsing
          │
          ▼
      🌳 AST
          │
          ├──────────────► 🔥 JavaScript Engine
          │
          └──────────────► 🦋 Babel
                                  │
                                  ▼
                           Transformed AST
                                  │
                                  ▼
                           Generated Code


📌 This is why understanding AST is important.

It's not just a JavaScript Engine concept.

It's a fundamental concept behind many JavaScript development tools.


/* ================================================================================================
   🎯 Interview Notes
   ================================================================================================

Q: What is an AST?

✅ An Abstract Syntax Tree is a tree representation of the syntactic
structure of source code.

--------------------------------------------------

Q: Why is it called "Abstract"?

Because it represents the important syntactic structure without preserving
every detail of the original source code, such as formatting whitespace.

--------------------------------------------------

Q: Why does Babel use an AST?

Because Babel needs to understand the structure and relationships of the
code before safely transforming it.

--------------------------------------------------

Q: Does Babel use simple find-and-replace?

❌ No.

It parses the source code into an AST, transforms the relevant nodes, and
then generates JavaScript code from the transformed structure.

--------------------------------------------------

Q: What are the major stages of Babel's transformation?

A simplified model:

Parse → Transform → Generate

1. Parse source code into an AST.
2. Transform the AST.
3. Generate new source code.

🎯 This is a very common interview concept.


/* ================================================================================================
   🧠 Key Mental Model
   ================================================================================================

Remember the progression:

📝 Source Code
      ↓
🔹 Tokens
      ↓
🌳 AST
      ↓
🧠 Structured Understanding of the Code

The biggest transition is:

❌ "This is just text."

        ↓

✅ "I understand what each part of this code IS and how the parts
   are RELATED."


📌 Tokenization:
"What is each piece?"

📌 Parsing:
"How do these pieces fit together?"

📌 AST:
"Represent that structure as a tree."


/* ================================================================================================
   ✅ Summary
   ================================================================================================

✅ AST = Abstract Syntax Tree.
✅ "Abstract" → doesn't preserve every source-code detail.
✅ "Syntax" → represents the syntactic structure of the program.
✅ "Tree" → information is organized into connected nodes.
✅ Each node represents a syntactic construct.
✅ The AST allows tools to understand code structurally.
✅ Babel uses ASTs to transform JavaScript.
✅ Babel follows the simplified pipeline:
   Parse → Transform → Generate.
✅ ASTs are also heavily used by ESLint, Prettier, TypeScript, minifiers,
   and other JavaScript tooling.

🚀 Next:
Once parsing successfully produces the AST, the JavaScript Engine can move
forward to the next stage of execution.
*/
