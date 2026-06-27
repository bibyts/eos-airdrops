import Section from "./Section";
import HoboAvatar from "./HoboAvatar";
import { sampleTraits } from "@/lib/site";

const rarityColor: Record<string, string> = {
  Common: "text-slate-300",
  Uncommon: "text-signal",
  Rare: "text-sky-400",
  Epic: "text-plasma",
  Legendary: "text-gold",
};

export default function Gallery() {
  const seeds = [3, 12, 19, 27, 34, 45, 58, 63, 71, 84, 96, 108];
  return (
    <Section
      id="gallery"
      eyebrow="The Camp"
      title="Meet the wanderers"
      intro="A peek at the crew. Final art is procedurally generated from hand-drawn traits — these placeholders show the vibe."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {seeds.map((seed) => (
          <figure key={seed} className="card group overflow-hidden">
            <div className="overflow-hidden">
              <div className="transition-transform duration-300 group-hover:scale-105">
                <HoboAvatar seed={seed} />
              </div>
            </div>
            <figcaption className="px-3 py-2 text-center text-xs text-slate-400">
              Hobo #{seed}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-center font-display text-lg font-semibold text-white">
          Traits from the bindle
        </h3>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {sampleTraits.map((t) => (
            <span
              key={t.name}
              className="card flex items-center gap-2 px-4 py-2 text-sm"
            >
              <span className="text-lg">{t.emoji}</span>
              <span className="text-slate-200">{t.name}</span>
              <span className={`text-xs font-semibold ${rarityColor[t.rarity] ?? "text-slate-400"}`}>
                {t.rarity}
              </span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
