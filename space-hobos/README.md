# 🛸 Space Hobos

Official landing site for **Space Hobos** — a collection of 5,555 cosmic vagabonds minting on **ApeChain**.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. No image assets required — hero/gallery art is generated as seed-based SVG placeholders, and the starfield is pure CSS. Swap in your real art whenever it's ready.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## Project structure

```
space-hobos/
├── app/
│   ├── layout.tsx      # fonts, metadata (SEO/OG/Twitter)
│   ├── page.tsx        # composes the sections
│   └── globals.css     # Tailwind + theme tokens & component classes
├── components/
│   ├── Nav.tsx         # sticky nav
│   ├── Hero.tsx        # headline, stats, floating Hobos
│   ├── About.tsx       # lore / story beats
│   ├── Gallery.tsx     # placeholder NFT grid + trait teaser
│   ├── Roadmap.tsx     # phased timeline
│   ├── Mint.tsx        # ⭐ placeholder mint UI, wired for web3 later
│   ├── Faq.tsx         # accordion
│   ├── Footer.tsx      # socials + disclaimer
│   ├── HoboAvatar.tsx  # deterministic SVG art generator (swap for real art)
│   └── Starfield.tsx   # animated background
└── lib/
    └── site.ts         # ⭐ ALL editable copy, links, supply, roadmap, FAQ
```

## Customizing

Almost everything you'll want to change lives in **`lib/site.ts`** — collection name,
tagline, supply, mint price/date, social links, roadmap phases, and FAQ. Edit that file
and the whole site updates.

To use your real artwork, replace `<HoboAvatar seed={n} />` usages in `Hero.tsx` and
`Gallery.tsx` with `<Image />` tags pointing at your PNG/IPFS assets.

## Adding the live mint (later)

The mint UI in `components/Mint.tsx` is intentionally a placeholder with clearly marked
stubs. To make it live on ApeChain:

1. `npm i wagmi viem @rainbow-me/rainbowkit @tanstack/react-query`
2. Define the ApeChain chain (chain id, RPC, `APE` native currency) in a wagmi config.
3. Wrap `app/layout.tsx` in `WagmiProvider` + `RainbowKitProvider`.
4. Replace the `connectWallet()` stub with RainbowKit's `<ConnectButton />` / `useConnect()`.
5. Set `contractAddress` in `lib/site.ts`, import your ABI, and replace the `mint()`
   stub with `useWriteContract()`.
6. Flip `const LIVE = true` in `Mint.tsx`.

## Deploy

This is a standard Next.js app — deploy to **Vercel** (recommended), Netlify, or any
Node host. For Vercel: push to a Git repo and import it, or run `npx vercel`.

---

Built for the wanderers. ✦
