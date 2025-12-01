# 🧠 Explain Like I'm...

**I can explain anything to anyone. Try me!**

An AI-powered agent that translates complex content into simple explanations tailored for ANY audience. Built with the [SmythOS SDK](https://smythos.com).

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
   git clone https://github.com/YOUR_USERNAME/explain-like-i-am.git
   cd explain-like-i-am
```

2. **Install dependencies:**
```bash
   npm install
```

3. **Set up your API key:**

   The SmythOS SDK uses a secure vault system for API keys. Create the vault file:
```bash
   mkdir -p ~/.smyth/.sre
```

   Then create `~/.smyth/.sre/vault.json` with your API key:
```json
   {
     "default": {
       "openai": "sk-your-openai-api-key-here",
       "anthropic": "",
       "googleai": "",
       "groq": "",
       "togetherai": ""
     }
   }
```

   > 💡 **Tip:** Only the `openai` key is required for this project.

---

## 🎮 Usage

### Option 1: Web Interface (Recommended)

1. **Build the server:**
```bash
   npm run build:server
```

2. **Start the web app:**
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

### Option 2: Command Line Interface

1. **Build the CLI:**
```bash
   npm run build
```

2. **Run the CLI:**
```bash
   npm start
```

3. **Follow the prompts:**
   - Enter content to explain
   - Enter your target audience
   - Get your explanation!

---

## 📁 Project Structure
```
explain-like-i-am/
├── public/
│   └── index.html        # Web UI
├── src/
│   ├── index.ts          # CLI version
│   └── server.ts         # Web server
├── dist/                  # Compiled output
├── package.json
├── tsconfig.json
├── rollup.config.js
└── README.md
```

---

## 🛠 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `npm run build` | `rollup -c` | Build the CLI version |
| `npm run build:server` | `esbuild...` | Build the web server |
| `npm start` | `node dist/index.js` | Run the CLI |
| `npm run dev` | `node dist/server.js` | Run the web server |

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

1. **SmythOS Agent** – A GPT-4o powered agent with a custom "ELI" personality
2. **Express Server** – Handles API requests for explanations
3. **Web UI** – Clean HTML/CSS/JS interface
4. **Simplify Endpoint** – Iteratively simplifies explanations on demand
```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Web UI    │────▶│   Express   │────▶│  SmythOS    │
│  (Browser)  │◀────│   Server    │◀────│   Agent     │
└─────────────┘     └─────────────┘     └─────────────┘
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [SmythOS SDK](https://smythos.com)
- Powered by [OpenAI GPT-4o](https://openai.com)

---

## 📬 Contact

Have questions? Found a bug? Want to say hi?

- GitHub Issues: [Create an issue](https://github.com/YOUR_USERNAME/explain-like-i-am/issues)
- Twitter: [@YOUR_TWITTER](https://twitter.com/YOUR_TWITTER)

---

<p align="center">
  <b>Everyone deserves to understand everything.</b><br>
  Built with 💜 using SmythOS SDK
</p>