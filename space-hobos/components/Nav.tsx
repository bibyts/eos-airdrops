import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "Lore" },
  { href: "#gallery", label: "Gallery" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#mint", label: "Mint" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-void-900/70 backdrop-blur-md">
      <nav className="container-px flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-white">
          🛸 {site.name}
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 transition-colors hover:text-signal"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a href="#mint" className="btn-primary !px-5 !py-2 text-xs">
          Mint Soon
        </a>
      </nav>
    </header>
  );
}
