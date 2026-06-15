/*
=================================================
WEBPACK #5 - HASHING & HTML WEBPACK PLUGIN 🔥
=================================================

📌 THE HASHING PROBLEM

Instead of:

filename: "bundle.js"

We can use:

filename: "[name].[contenthash].js"

Build again 🚀

Before:

bundle.js

After:

main.5bb0375678e8785ad2db.js

-------------------------------------------------

📌 WHAT IS contenthash?

Webpack generates a unique hash based on
the content of the file.

If the content changes:

👉 The hash changes.

Example:

main.5bb0375678e8785ad2db.js

Change some JS code...

Build again...

main.a8f4d2b7c3f9e1f4d7a2.js

New content = New hash

-------------------------------------------------

📌 WHY IS THIS USEFUL?

Because of Browser Caching 🌐

Browsers often cache JS files.

If the filename remains:

bundle.js

The browser may continue using the old cached file.

But when the filename becomes:

main.NEW_HASH.js

The browser immediately realizes:

👉 This is a new file.
👉 Download the new version.

This technique is called:

Cache Busting 💥

-------------------------------------------------

📌 ANOTHER PROBLEM

Every build creates a new hash.

That means:

❌ The old file remains in dist
❌ New files keep accumulating

Example:

dist/

main.111.js
main.222.js
main.333.js
main.444.js

-------------------------------------------------

📌 SOLUTION

Inside webpack.config.js:

output: {
  clean: true,
}

Now before every build:

🧹 Webpack cleans the dist folder

Result:

Only the latest build remains.

-------------------------------------------------

📌 BUT WAIT... ANOTHER PROBLEM 🤯

Our HTML still contains:

<script src="../dist/main.5bb0375678e8785ad2db.js"></script>

When the hash changes:

main.a8f4d2b7c3f9e1f4d7a2.js

We would need to manually update
the script tag every build.

❌ Not practical
❌ Not scalable
❌ Easy to forget

-------------------------------------------------

WEBPACK'S SOLUTION 👌🙂

👉 Plugins

Think of a Plugin like:

🔌 A charger plug

You plug extra functionality into Webpack.

-------------------------------------------------

HTML WEBPACK PLUGIN 🔥

Install:

npm install --save-dev html-webpack-plugin

-------------------------------------------------

📌 AFTER INSTALLING

1. Remove the script tag completely from:

src/index.html

❌ Remove:

<script src="..."></script>

2. Configure HtmlWebpackPlugin
   inside webpack.config.js

3. Run build 🚀

-------------------------------------------------

📌 WHAT HAPPENS NOW?

Webpack will:

1️⃣ Take your HTML template

2️⃣ Build your JS bundle

3️⃣ Generate hash automatically

4️⃣ Inject the correct script tag automatically

5️⃣ Create a new index.html inside dist

Result:

dist/
├── index.html
└── main.hash.js

-------------------------------------------------

📌 WHY IS THIS AWESOME?

Whenever the hash changes:

main.oldhash.js
        ↓
main.newhash.js

Webpack automatically updates:

<script src="main.newhash.js"></script>

No manual work needed 😎

-------------------------------------------------

📌 HOW HTML WEBPACK PLUGIN THINKS 🧠

Template HTML
       ↓
Webpack Build
       ↓
Generate Bundle
       ↓
Generate Hash
       ↓
Inject Correct Script
       ↓
Create Final index.html

-------------------------------------------------

📌 BONUS

The same concept can later be used for:

🖼️ Images
🎥 Videos
🎨 CSS
🔤 Fonts
📦 Other Assets

Webpack can include them in the build process
and manage their generated filenames as well.

-------------------------------------------------

📌 SUMMARY - HOW DO WE DEAL WITH HTML?

Before:

index.html
   ↓
Manually add script tag
   ↓
Manually update hashes
   ↓
Pain 😭

After HtmlWebpackPlugin:

index.html (template)
   ↓
Webpack builds bundles
   ↓
Injects correct hashed files automatically
   ↓
Creates final index.html
   ↓
Happiness 😁🎉

📌 Interview Answer:

HtmlWebpackPlugin takes the HTML template,
waits for Webpack to generate the bundles,
then automatically injects the correct bundled
files (including hashed filenames) into the
generated index.html.

HtmlWebpackPlugin automatically creates the final index.html 
and injects the correct bundled JS file (including hashed filenames), so we don't have to update script tags manually.

Note:
Caching works with both bundle.js and main.[contenthash].js, but hashing makes cache invalidation automatic. 
When content changes, the filename changes, so the browser downloads the new file immediately 
instead of checking whether the old cached file is still valid.
*/
