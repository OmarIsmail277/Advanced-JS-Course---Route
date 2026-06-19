/*
=================================================
VITE #9 - ENVIRONMENT VARIABLES (.env) 🔐⚡
=================================================

📌 WHAT IS GOOD IN VITE? 🧠

One of the easiest things in Vite compared to Webpack:

👉 environment variables handling

-------------------------------------------------

📌 WHAT ARE ENV VARIABLES? 🤔

They are values stored outside your code like:

- API keys
- URLs
- config values
- mode settings

-------------------------------------------------

📌 CREATE .env FILE 📁

In project root:

VITE_APP_KEY = vite demo

-------------------------------------------------

📌 HOW TO USE IT? ⚡

Anywhere in your code:

console.log(import.meta.env.VITE_APP_KEY);

👉 It will work automatically

-------------------------------------------------

📌 IMPORTANT IDEA ⚠️

In Vite:

👉 env variables are accessed using:

import.meta.env

NOT process.env (like older setups)

-------------------------------------------------

📌 EXAMPLE USE CASES 🌐

- Supabase
- OpenAI API keys
- Google Maps API
- Facebook SDK keys

-------------------------------------------------

📌 IMPORTANT SECURITY IDEA 🔐

If the value is sensitive (secret):

👉 DO NOT put it in frontend
👉 better keep it in backend

Because:

✔ frontend code is visible to users

-------------------------------------------------

📌 SIMPLE FLOW 🧠

.env file
   ↓
Vite loads it automatically
   ↓
available in import.meta.env
   ↓
used in app code

-------------------------------------------------

📌 ONE-LINE INTERVIEW ANSWER 🎤

Vite supports environment variables through .env files, which are automatically loaded and accessed via import.meta.env, making configuration management simple compared to traditional setups.
*/
