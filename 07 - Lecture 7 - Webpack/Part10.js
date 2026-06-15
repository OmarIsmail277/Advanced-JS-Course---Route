/*
=================================================
WEBPACK #9 - LOADERS vs PLUGINS (FINAL INTERVIEW ANSWER) 🎤⚙️
=================================================

📌 INTERVIEW QUESTION

Q: What is the difference between Loader and Plugin?

-------------------------------------------------

📌 LOADER ⚙️

- Works when Webpack encounters a specific file type
- Triggered during module processing (file level)

Example:

When Webpack sees:

import "./style.css";

👉 It checks rules:
test: /\.css$/

👉 Then runs loaders (right → left):
css-loader → style-loader

📌 Result:
Transforms the file type so Webpack can understand it.

👉 Loader = transforms files

-------------------------------------------------

📌 PLUGIN 🔌

- Works on the whole build process (build level)
- Runs after or during the compilation lifecycle

Example:

HtmlWebpackPlugin:

👉 After bundling is done
👉 Creates index.html in /dist
👉 Automatically injects <script> tag

Other examples:
- CleanWebpackPlugin (cleans dist folder)
- MiniCssExtractPlugin (extracts CSS)
- optimization plugins

📌 Result:
Extends and controls the build system itself.

👉 Plugin = extends build process

-------------------------------------------------

📌 SIMPLE DIFFERENCE 🧠

Loader:
👉 transforms individual files

Plugin:
👉 works on the full build output

-------------------------------------------------

📌 ONE-LINE INTERVIEW ANSWER 🎯

Loaders transform files as they are imported,
while plugins operate on the entire Webpack build process
and modify or enhance the final output.

-------------------------------------------------

📌 REAL-WORLD LINK 🔥

React uses the same idea:

- Loaders → handle JSX, CSS, images
- Plugins → build HTML, optimize output, production build setup

React is the UI library — the bundler (Webpack/Vite) is what generates hashed filenames and production bundles.
*/
