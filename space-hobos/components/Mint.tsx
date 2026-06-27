"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * MINT SECTION — placeholder, wired for a real mint later.
 *
 * To go live you'll replace the stubbed handlers below with web3 calls.
 * Recommended stack for ApeChain (EVM): wagmi + viem + RainbowKit.
 *
 *   1. npm i wagmi viem @rainbow-me/rainbowkit @tanstack/react-query
 *   2. Configure a wagmi config with the ApeChain chain definition.
 *   3. Wrap app/layout in WagmiProvider + RainbowKitProvider.
 *   4. Swap `connectWallet()` for RainbowKit's <ConnectButton/> or useConnect().
 *   5. Swap `mint()` for useWriteContract() against your deployed contract
 *      (set site.contractAddress in lib/site.ts and import the ABI).
 *
 * Everything below is intentionally framework-agnostic so you can drop in
 * whichever wallet library you prefer without restructuring the UI.
 */

const MAX_PER_TX = 5;
const LIVE = false; // flip to true once the contract is deployed & wired

export default function Mint() {
  const [qty, setQty] = useState(1);
  const [connected, setConnected] = useState(false);

  const clamp = (n: number) => Math.max(1, Math.min(MAX_PER_TX, n));

  // STUB — replace with real wallet connect (e.g. RainbowKit / wagmi useConnect).
  const connectWallet = () => setConnected((c) => !c);

  // STUB — replace with useWriteContract() against site.contractAddress.
  const mint = () => {
    alert(
      `Minting isn't live yet!\n\nThis is where ${qty} Space Hobo${
        qty > 1 ? "s" : ""
      } would mint on ${site.chain}. Join the Discord to catch the real launch.`
    );
  };

  return (
    <section id="mint" className="container-px py-20 sm:py-28">
      <div className="card relative mx-auto max-w-3xl overflow-hidden p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-plasma/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-ember/20 blur-3xl" />

        <div className="relative text-center">
          <span className="eyebrow">The Big Departure</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Board the boxcar
          </h2>
          <p className="mx-auto mt-4 max-w-md text-slate-400">
            Public mint opens {site.mintDate.toLowerCase()} on {site.chain}. Price in {site.chainGasToken}:{" "}
            <span className="text-white">{site.mintPrice}</span>.
          </p>

          {!LIVE && (
            <p className="mx-auto mt-5 inline-block rounded-full border border-ember/40 bg-ember/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ember">
              ✦ Minting not live yet — coming soon ✦
            </p>
          )}

          {/* Quantity selector */}
          <div className="mx-auto mt-8 flex max-w-xs items-center justify-between rounded-full border border-white/10 bg-void-800 px-2 py-2">
            <button
              onClick={() => setQty((q) => clamp(q - 1))}
              className="h-10 w-10 rounded-full bg-white/5 text-xl text-white transition hover:bg-white/10"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-white">{qty}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500">
                max {MAX_PER_TX}
              </div>
            </div>
            <button
              onClick={() => setQty((q) => clamp(q + 1))}
              className="h-10 w-10 rounded-full bg-white/5 text-xl text-white transition hover:bg-white/10"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Connect / Mint */}
          <div className="mx-auto mt-6 flex max-w-xs flex-col gap-3">
            <button onClick={connectWallet} className="btn-ghost w-full">
              {connected ? "🟢 Wallet Connected (demo)" : "Connect Wallet"}
            </button>
            <button
              onClick={mint}
              disabled={!connected}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-40"
            >
              {connected ? `Mint ${qty}` : "Connect to Mint"}
            </button>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Connect button is a demo toggle. Real wallet + mint logic plugs into the
            marked stubs in <code className="text-slate-400">components/Mint.tsx</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
