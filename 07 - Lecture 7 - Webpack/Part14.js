/*
=================================================
WEBPACK #12 - HMR (HOT MODULE REPLACEMENT) 🔥
=================================================

📌 WHAT IS HMR?

HMR = Hot Module Replacement

👉 It updates ONLY the changed part of the app
👉 WITHOUT reloading the whole page

-------------------------------------------------

📌 BEFORE HMR ❌

If you change something (e.g. style.css):

- Webpack rebuilds everything
- Browser reloads the whole page

Result:
❌ Full refresh
❌ State is lost
❌ Slow feedback loop

-------------------------------------------------

📌 WITH HMR 🔥

If you change style.css:

Webpack will:

1️⃣ Detect the changed file
2️⃣ Re-run only required loaders
   (css-loader → style-loader)
3️⃣ Build updated module
4️⃣ Send update to browser

Browser will:

👉 Replace only the changed module
👉 WITHOUT full page reload

-------------------------------------------------

📌 HOW IT COMMUNICATES 🧠

Webpack Dev Server uses:

👉 WebSockets 🔌

So the flow is:

editor change
   ↓
webpack detects change
   ↓
rebuild only changed module
   ↓
send update via WebSocket
   ↓
browser applies update

-------------------------------------------------

📌 EXAMPLE 🎨

Edit style.css:

style.css change
   ↓
css-loader runs again
   ↓
style-loader injects new style
   ↓
browser updates CSS instantly

No refresh 🚫

-------------------------------------------------

📌 WHY HMR IS POWERFUL 🚀

✔ keeps application state
✔ faster development
✔ instant feedback
✔ avoids full page reload

Example:
- React state stays
- form input stays
- UI updates instantly

-------------------------------------------------

📌 SIMPLE IDEA 🧠

Instead of:

👉 reload everything

HMR does:

👉 replace only the changed module

-------------------------------------------------

📌 COMPARISON ⚖️

Full reload:
page reload → lose state → slow

HMR:
only update changed module → keep state → fast

-------------------------------------------------

📌 CONNECTION TO OTHER CONCEPTS 🔗

HMR is similar in idea to:

- Lazy loading
- Code splitting
- defer / async scripts
- partial hydration

👉 All focus on loading ONLY what is needed

-------------------------------------------------

📌 ONE-LINE INTERVIEW ANSWER 🎤

HMR (Hot Module Replacement) allows Webpack to update only changed modules in the browser without doing a full page reload by communicating updates via WebSockets.

Editor change
   ↓
Webpack Dev Server (backend)
   ↓  🔌 WebSocket connection
Browser (frontend)

🖥️ Webpack Dev Server
Watches files
Rebuilds changed modules
Sends “update messages” (HMR updates)

🌐 Browser
Keeps a WebSocket connection open
Listens for updates
Applies changes without full reload

🔥 Key idea
WebSocket is a live, persistent connection between browser and dev server so updates can be pushed instantly instead of the browser constantly asking for changes.

One-line interview answer

WebSockets connect the Webpack Dev Server (backend) and the browser (frontend), allowing the server to push hot update messages instantly to the client 
without page reload.
*/
