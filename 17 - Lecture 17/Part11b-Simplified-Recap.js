// =================================================================================================
// ⚡ JAVASCRIPT ENGINE — QUICK MENTAL MODEL
// =================================================================================================

/*

📝 JS Code
   │
   ▼
🔹 Tokenization
   │
   ▼
🔍 Parsing
   │
   ▼
🌳 AST
   │
   ▼
📜 Bytecode
   │
   ▼
🔥 Ignition
   │
   ▼
▶️ Execution
   │
   ▼
🧠 Runtime Feedback
   │
   ▼
🔥 Hot Code?
   │
   ▼
⚡ JIT Optimization
   │
   ├── Sparkplug
   ├── Maglev
   └── TurboFan
   │
   ▼
💻 Optimized Machine Code
   │
   ▼
🖥️ CPU


During execution:

📚 Call Stack → Execution Contexts
📦 Heap → Objects / managed memory
🗑️ Garbage Collector → Removes unreachable data
🔒 Closures → Can keep data reachable


Around the engine:

🌐 Browser / Node.js
        │
        ├── Web APIs / Node APIs
        └── 🔄 Event Loop


🎯 KEY IDEAS:

• JavaScript itself is a specification, not the thing executing the code.
• The JS Engine executes JavaScript.
• Parsing checks syntax and produces the AST.
• AST represents the structure of the code.
• Ignition is V8's interpreter.
• Bytecode is NOT machine code.
• JIT combines fast execution with runtime optimization.
• Hot code may be optimized.
• Runtime assumptions can lead to optimized code.
• If an assumption becomes invalid → 🔄 DeOPT.
• Objects are stored in engine-managed memory and have references.
• Garbage Collection reclaims unreachable objects.
• The host environment provides APIs and the Event Loop.

🧠 SIMPLEST VERSION:

JS Code
  ↓
AST
  ↓
Bytecode
  ↓
Ignition
  ↓
Execution
  ↓
Runtime Feedback
  ↓
Optimization
  ↓
Machine Code

*/
