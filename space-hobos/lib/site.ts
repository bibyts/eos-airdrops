// Central place to tweak collection details, copy, and links.
// Update these values as your launch firms up — components read from here.

export const site = {
  name: "Space Hobos",
  tagline: "Vagabonds of the void, riding boxcars between the stars.",
  description:
    "Space Hobos is a collection of 5,555 hand-stitched cosmic drifters minting on ApeChain. No masters, no map — just a tin can, a bindle, and the whole universe to wander.",
  chain: "ApeChain",
  chainGasToken: "APE",
  supply: 5555,
  mintPrice: "TBA",
  mintDate: "Coming soon",
  socials: {
    twitter: "https://x.com/spacehobos",
    discord: "https://discord.gg/spacehobos",
    opensea: "https://opensea.io/collection/space-hobos",
    magicEden: "https://magiceden.io/",
  },
  // Set this when your contract is deployed — the mint section reads it.
  contractAddress: "" as string,
};

export type RoadmapPhase = {
  phase: string;
  title: string;
  status: "done" | "active" | "upcoming";
  points: string[];
};

export const roadmap: RoadmapPhase[] = [
  {
    phase: "Phase 0",
    title: "Boxcar Boarding",
    status: "active",
    points: [
      "Reveal the Space Hobos lore & art direction",
      "Open the Discord camp and grow the wanderer community",
      "Allowlist (the \"Golden Ticket\") raffles begin",
    ],
  },
  {
    phase: "Phase 1",
    title: "The Big Departure",
    status: "upcoming",
    points: [
      "Public mint on ApeChain",
      "On-chain reveal of all 5,555 Hobos",
      "Secondary listings on OpenSea & Magic Eden",
    ],
  },
  {
    phase: "Phase 2",
    title: "Riding the Rails",
    status: "upcoming",
    points: [
      "Holder-only \"Campfire\" lounge & perks",
      "Trait-based community quests and rewards",
      "Collabs with other ApeChain collections",
    ],
  },
  {
    phase: "Phase 3",
    title: "Hobo Nation",
    status: "upcoming",
    points: [
      "Community treasury governed by holders",
      "IRL meetups + merch drops",
      "Season 2: companions, ships & side-quests",
    ],
  },
];

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "What is Space Hobos?",
    a: "A collection of 5,555 unique cosmic vagabonds living on ApeChain. Each Hobo is procedurally assembled from hand-drawn traits — bindles, tin cans, jetpacks, ray-gun harmonicas and more.",
  },
  {
    q: "What chain is it on?",
    a: "ApeChain. Mint and gas are paid in APE. You'll connect an EVM wallet (like Rabby or MetaMask) configured for the ApeChain network.",
  },
  {
    q: "How much does it cost to mint?",
    a: "Mint price and date are still being finalized — join the Discord and follow us on X to be first to know. Allowlist spots will get a discount.",
  },
  {
    q: "How many can I mint?",
    a: "Mint limits per wallet will be announced before launch. Allowlist and public phases may have different caps.",
  },
  {
    q: "Is the art original?",
    a: "Yes — every trait is original artwork created for Space Hobos. Holders receive a commercial-use license for the Hobo they own.",
  },
  {
    q: "How do I get on the allowlist?",
    a: "Hang around the camp. Be active in Discord, catch the Golden Ticket raffles, and watch X for allowlist drops.",
  },
];

export type Trait = { name: string; emoji: string; rarity: string };

// Sample traits shown in the gallery / traits teaser.
export const sampleTraits: Trait[] = [
  { name: "Tin-Can Helmet", emoji: "🥫", rarity: "Common" },
  { name: "Patchwork Bindle", emoji: "🎒", rarity: "Common" },
  { name: "Ray-Gun Harmonica", emoji: "🎷", rarity: "Rare" },
  { name: "Comet Bindle Stick", emoji: "☄️", rarity: "Rare" },
  { name: "Solar Sail Poncho", emoji: "🪂", rarity: "Epic" },
  { name: "Black Hole Lantern", emoji: "🕳️", rarity: "Legendary" },
  { name: "Stardust Beard", emoji: "✨", rarity: "Epic" },
  { name: "Rusty Jetpack", emoji: "🚀", rarity: "Uncommon" },
];
