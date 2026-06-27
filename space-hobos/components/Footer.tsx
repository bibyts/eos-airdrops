import { site } from "@/lib/site";

const socials = [
  { label: "X / Twitter", href: site.socials.twitter },
  { label: "Discord", href: site.socials.discord },
  { label: "OpenSea", href: site.socials.opensea },
  { label: "Magic Eden", href: site.socials.magicEden },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container-px flex flex-col items-center gap-6 text-center">
        <div className="font-display text-xl font-bold text-white">🛸 {site.name}</div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-400 transition-colors hover:text-signal"
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className="max-w-md text-xs text-slate-600">
          {site.name} is an art collectible on {site.chain}. Nothing here is financial advice.
          Always verify the official contract address before minting.
        </p>
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} {site.name}. Built for the wanderers.
        </p>
      </div>
    </footer>
  );
}
