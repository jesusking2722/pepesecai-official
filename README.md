# PepeSec AI Blockchain Group - Official Website

Welcome to the **PepeSec AI Blockchain Group** official website! 🚀
This project is built with **React** and **Tailwind CSS**, ensuring a sleek, modern, and highly performant user interface.

---

## 🚀 Tech Stack

- **Frontend**: React (Vite-powered)
- **Styling**: Tailwind CSS
- **Package Manager**: Yarn
- **State Management**: Context API (or any additional state management library as needed)
- **Deployment**: Vercel / Netlify / Custom Server

---

## 📂 Project Structure

```
PepeSecAI-Official/
├── src/
│   ├── assets/        # Static assets (images, icons, etc.)
│   ├── components/    # Reusable UI components
│   ├── pages/         # Individual pages (Home, About, etc.)
│   ├── hooks/         # Custom React hooks
│   ├── context/       # Global state management
│   ├── utils/         # Helper functions
│   ├── App.tsx        # Main app entry
│   ├── index.tsx       # Root file (ReactDOM render)
├── public/            # Static files
├── tailwind.config.js # Tailwind CSS configuration
├── package.json       # Dependencies & scripts
├── README.md          # Documentation (this file)
└── .gitignore         # Ignored files
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/smartdev720/pepesec-ai-official
cd PepeSecAI-Official
```

### 2️⃣ Install Dependencies

```sh
yarn install
```

### 3️⃣ Start Development Server

```sh
yarn start
```

_Open `http://localhost:3000/` to see the app running._

### 4️⃣ Build for Production

```sh
yarn build
```

### 5️⃣ Preview Production Build

```sh
yarn preview
```

---

## 🎨 Tailwind CSS Configuration

The default **Tailwind CSS** configuration is extended for custom styles. You can modify `tailwind.config.js` as needed:

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#1E90FF",
      },
    },
  },
  plugins: [],
};
```

---

## 📌 Deployment

### **Vercel Deployment**

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Login to Vercel:
   ```sh
   vercel login
   ```
3. Deploy:
   ```sh
   vercel
   ```

_You can also use **Netlify** or **GitHub Pages** as alternatives._

---

## 🤝 Contributing

We welcome contributions! Follow these steps to contribute:

1. **Fork the Repository**
2. **Create a Branch** (`git checkout -b feature-new-section`)
3. **Commit Changes** (`git commit -m "Added new feature"`)
4. **Push to GitHub** (`git push origin feature-new-section`)
5. **Create a Pull Request**

---

## 🔐 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it!

---

## 🌎 Connect With Us

💻 **Website**: [pepesecai.com](https://pepesecai.com)  
📧 **Email**: contact@pepesecai.com  
🐦 **Twitter**: [@PepeSecAI](https://twitter.com/PepeSecAI)  
📢 **Discord**: [Join Our Community](https://discord.gg/pepesec)

_🚀 Built with passion by the PepeSec AI Blockchain Group._
