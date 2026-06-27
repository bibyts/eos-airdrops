import { site } from "@/lib/site";
import Starfield from "./Starfield";
import HoboAvatar from "./HoboAvatar";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-16 sm:pt-24">
      <Starfield />
      <div className="container-px relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Minting on {site.chain}</span>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Space <span className="glow-text text-plasma">Hobos</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">{site.tagline}</p>
          <p className="mt-4 max-w-xl text-slate-400">{site.description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#mint" className="btn-primary">
              Join the Mint
            </a>
            <a href={site.socials.discord} className="btn-ghost" target="_blank" rel="noreferrer">
              Enter the Camp ↗
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            <Stat label="Supply" value={site.supply.toLocaleString()} />
            <Stat label="Chain" value={site.chain} />
            <Stat label="Mint" value={site.mintDate} />
          </dl>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {[7, 23, 41, 88].map((seed, i) => (
              <div
                key={seed}
                className="card overflow-hidden animate-float"
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                <HoboAvatar seed={seed} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card px-4 py-3">
      <dt className="text-[11px] uppercase tracking-widest text-slate-400">{label}</dt>
      <dd className="mt-1 font-display text-base font-semibold text-white">{value}</dd>
    </div>
  );
}
