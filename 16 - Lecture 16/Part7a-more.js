// -------------------------------------
// 2- The JavaScript Engine and Runtime
// -------------------------------------

//* JS ENGINE: IT'S A PROGRAM THAT EXECUTES JAVASCRIPT CODE.
// There are a lot of steps involved in doing that but essentially
// executing JavaScript code is what an engine does.

//* Now, Every browser has its own JavaScript engine, most well known: Google's V8.
// The V8 engine powers Google Chrome, but also Node.js
// which is that JavaScript runtime that we talked about in the beginning of the course
// so, the one that we can use to build server-side applications with JavaScript,
// so outside of any browser.
// Of course, all the other browsers have their own JavaScript. engines
// that we can look up online if you are interested.

// Anyway, it's quite easy to understand what an engine is,
// but, what is most important is to actually understand it's
// components and how it works.

// So, any JavaScript engine always contains a 📞CALL STACK and a 🎧HEAP.
//* The CALL STACK is actually 🌿🈁 WHERE our code is actually executed
// using something called EXECUTION CONTEXT.
// and the HEAP is an unstructured memory pool,
// which stores all the objects that our application needs.

//* All right, so with this look at the engine, we have answered WHERE our code is executed ✅,
// but now the question ❓❔❓ is How the code is compiled to
//* Machine Code so that it actually can be executed afterwards❓
// Well, let's find out! 💪💕🙌💖

// But first we need to make a quick Computer Science side note here,
//* that talks about the differnce between compilation and interpretation.

// So in the last lecture, we learned that the computer's processor
// only understands zeros 0️⃣ and ones 1️⃣ and therefore every single
// computer program needs to be converted into this machine code
//* and this can happen using Compilation or Interpretation.

// 👉 Compilation: *Entire* source code is converted into machine code at once,
// and this machine code is then written to a (portable) binary file that
// can be executed on any computer. so we have 2 steps different steps here.
// First, the machine code is Built, then it's Executed in the CPU, so in the processor.
//  And the execution can happen way after the compilation of course.
// For example any application that we install on our computer has been compiled before into machine code
// and then we can execute it whenever we want (way after compilation).

// 👉 Interpretation: Interpreter runs through the source code
// and executes it line by line. so, here we don't have the same steps as before.
// Instead, *the code is read and executed all at the same time*.
// Ofcourse, the code still needs to be converted into machine code, but it simply happens right before
// it's executd and not ahead of time.

//* Now, JavaScript. used to be a purely interpreted language, but the
// problem with interpreted languages is that they are much, much slower than compiled languages.
// This used to be okay for JavaScript, but now
// with modern JavaScript, and fully fledged web applications that we built
// and use today, low performance is no longer acceptable.
// Just imagine, you are using Google maps in your browser, and you were dragging the map, and each time
// you dragged the map, the code was executed line by line (takes one sec for example for it to move),
// and it was really slow, that would be a really bad user experience.
// That would be completely unacceptable, right? many people think that JS is still and interpreted language,
// but that is not true any more.

//  So, in order to solve this problem,
// modern JavaScript engines have implemented a new strategy to execute JavaScript code much faster,
// and this is called Just-in-Time compilation.

// So instead of simple interpretation, modern JavaScript engine now uses
// a mix between compilation and interpretation which is called Just-in-Time
// compilation.

// 👉 Just-in-time (JIT) compilation: This approach basically compiles the
// Entire code into machine code at once, then executes it right away.
// So, we still have the two steps of regular ahead of time compilation,
// but there is no portable file to execute, and the execution happens
// immediately after compilation. and this is perfect for JavaScript,
// as it's really alot faster than just executing code line by line.

// Some details are skimmed over, but this what we need to know.
// Anyway, let's understand how this works in the particular case of JS.

// ---------------
// JIT Compilation
// ---------------
// So, as a piece of JS code enters the engine, the first step is to
//1️⃣- Parse the code, during the parsing process the code is parsed into a data structure called AST (Abstract Syntax Tree),
// this works first by splitting up each line of code into pieces that are meaningful to the language like the const or function keywords
// and then saving all these pieces into the tree in a structured way (this step also checks for any syntax errors)
// and the resulting tree will later be used to generate the machine code.

// Now let's say we have a very simple program, all it does is to declare a variable like this:
const x = 23;
// and this code enters the engine, the first step is to parse it and generate the AST, which looks like this:

// {
//   type: "Program",
//   body: [
//     {
//       type: "VariableDeclaration",
//       kind: "const",
//       declarations: [
//         {
//           type: "VariableDeclarator",
//           id: {
//             type: "Identifier",
//             name: "x"
//           },
//           init: {
//             type: "Literal",
//             value: 23
//           }
//         }
//       ]
//     }
//   ]
// }

// So this tree is just for a one line of code, so we have a variable declaration which should be constant
// with the name X and the value of 23, and besides that there is a lot of other stuff here,
// as you can see, just imagine what it would be look like for a large real application.
// And of course, we don't need to know what an AST looks like, this is just for curiosity okay.

// Now sometimes, I get asked if this tree has any anything to do with the DOM tree,
// and the answer is a very clear NO, they are completely different things, so don't get confused by that.
// AST is just a represenation of our entire code inside the engine.

// Anyway, The next step, is Compilation
// 2️⃣- Which takes the generated AST and compliles in into machine code.
// 3️⃣- Execution, this machine code then gets executed right away.
// and that's because modern JS engine uses JIT compilation,
// and remember execution happens in the JavaScript. engine's CALL STACK.
// but we will dig deeper into this in the next lecture.
// All right, so far so good, we have our code running, so we can
// finish here, Right❓🤔
// Well, not so fast! Because modern JavaScript engines actually
// have some pretty clever optimization strategies. 🤍

// What they do is to create a very unoptimized version of machine code
// in the beginning just so that it can start executing as fast as
// possible. Then in the background, this code is being optimized
// and recompiled during the already running program execution.
// And this can be done multiple times and after each optimization
// the unoptimized code is simply swept for the new more optimized code
// without ever stopping execution of course. And this process is what
// makes modern engines such as the V-Eight so fast.

// All this parsing, compilation and optimization
// happens in some special threads inside the engine
// that we cannot access from our code.
// So completely separate from the main thread
// that is basically running into call stack executing our own code.
// Knowing that different engines implements in slightly different ways,
// but in a nutshell, this is what modern Just-In-Time compilation looks like for JavaScript.
// and next time if someone told you that JavaScript is an interpreted language, you can tell them that it is not true anymore,
// and that it is actually a compiled language, but with a very special strategy called JIT compilation,
// which is what makes it so fast and efficient for building modern web applications.
// Just show them this slide and they will understand. 😎😝
