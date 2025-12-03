# 🧠 Explain Like I'm...

**I can explain anything to anyone. Try me!**

An AI-powered agent that translates complex content into simple explanations tailored for ANY audience. Built for the [SmythOS](https://smythos.com) Smyth Forged competition.

![Explain Like I'm... Demo](./demo.png)

---

## ✨ Features

- **Universal Input** – Paste ANY complex content: legal jargon, medical terms, technical docs, financial reports
- **Custom Audiences** – Type any audience: "a 5-year-old", "my grandma", "a CEO with 30 seconds"
- **One-Click Examples** – Try Legal, Tech, Medical, or Finance examples instantly
- **Simplify Further** – Still too complex? Click "Simpler" to break it down even more
- **Beautiful UI** – Clean, minimalist interface with dark mode
- **Typing Animation** – Watch explanations appear letter by letter
- **Copy to Clipboard** – One-click copy for sharing

---

## 🎯 The Problem

We live in a world of specialists. Lawyers write for lawyers. Doctors write for doctors. Developers write for developers.

This creates a massive communication gap that affects everyone – from parents trying to understand medical diagnoses to executives reviewing technical proposals.

**Everyone deserves to understand everything.**

---

## 💡 The Solution

Explain Like I'm... takes complex content and explains it perfectly for any audience you specify.

| Input | Audience | Result |
|-------|----------|--------|
| Legal contract jargon | "a 5-year-old" | Simple analogy with toys |
| Medical diagnosis | "my grandma" | Warm, familiar explanation |
| Kubernetes documentation | "a CEO" | Business impact focus |
| Financial report | "a Nigerian farmer" | Culturally relevant analogy |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)
- An OpenAI API key ([get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository:**
```bash
   git clone https://github.com/Emminex23/explain-like-i-am.git
   cd explain-like-i-am
```

2. **Install dependencies:**
```bash
   npm install
```

3. **Set up your API key:**

   Create a `.env` file in the project root:
```bash
   echo "OPENAI_API_KEY=sk-your-openai-api-key-here" > .env
```

   Or manually create `.env` and add:
```
   OPENAI_API_KEY=sk-your-openai-api-key-here
```

   > ⚠️ **Important:** Never commit your `.env` file to GitHub!

---

## 🎮 Usage

1. **Build the server:**
```bash
   npm run build
```

2. **Start the app:**
```bash
   npm run dev
```

3. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Start explaining!**
   - Paste any complex content (or click an example)
   - Type who you want it explained for
   - Click "Explain It!" ✨
   - Want it simpler? Click "Simpler"

---

## 📁 Project Structure
```
explain-like-i-am/
├── public/
│   └── index.html        # Web UI
├── src/
│   └── server.ts         # Express server + OpenAI integration
├── dist/                  # Compiled output
├── .env                   # API key (don't commit!)
├── package.json
└── README.md
```

---

## 🛠 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `npm run build` | Compiles TypeScript | Build the server |
| `npm run dev` | Runs with .env loaded | Start development server |
| `npm start` | Runs compiled server | Start production server |

---

## 🎨 Screenshots

### Light Mode
![Light Mode](./screenshots/light-mode.png)

### Dark Mode
![Dark Mode](./screenshots/dark-mode.png)

### Explanation Result
![Result](./screenshots/result.png)

---

## 🔧 How It Works
```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Web UI    │────▶│   Express   │────▶│   OpenAI    │
│  (Browser)  │◀────│   Server    │◀────│   GPT-4o    │
└─────────────┘     └─────────────┘     └─────────────┘
```

1. **Web UI** – Clean HTML/CSS/JS interface with dark mode
2. **Express Server** – Handles API requests at `/api/explain` and `/api/simplify`
3. **OpenAI GPT-4o** – Powers the "ELI" personality that adapts explanations

---

## 🙏 Acknowledgments

- Built for [SmythOS](https://smythos.com) Smyth Forged
- Powered by [OpenAI GPT-4o](https://openai.com)

---

<p align="center">
  <b>Everyone deserves to understand everything.</b><br>
  Built with 💜 for SmythOS Smyth Forged
</p>