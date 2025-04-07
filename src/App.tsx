import React from "react";
import "./App.css";
import Container from "./components/layouts/Container";
import Home from "./pages/Home";
import Security from "./pages/Security";
import { Routes, Route } from "react-router-dom";
import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana } from "@reown/appkit/networks";
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

const solanaWeb3JsAdapter = new SolanaAdapter({
    wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

const projectId = "8019133a9c1ed8dcf01b9fddb5e7247b";

const metadata = {
    name: "PepeSEC AI",
    description: "PepeSEC AI Official Website",
    url: "https://pepesecai.vercel.app",
    icons: ["https://pepesecai.vercel.app/logo192.png"],
};

createAppKit({
    adapters: [solanaWeb3JsAdapter],
    networks: [solana],
    metadata: metadata,
    projectId,
    features: {
        analytics: true,
        socials: false,
        email: false,
    },
});

function App() {
  return (
    <Container>
      <Routes>
        <Route index element={<Home />} />
        <Route path="security" element={<Security />} />
      </Routes>
    </Container>
  );
}

export default App;
