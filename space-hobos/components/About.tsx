import Section from "./Section";

const beats = [
  {
    emoji: "🌌",
    title: "Born in the Black",
    body: "When the old colonies packed up and left, the Hobos stayed behind — patching ships from scrap and riding the cosmic rails wherever they lead.",
  },
  {
    emoji: "🎒",
    title: "Everything They Own",
    body: "A bindle, a tin-can helmet, and a ray-gun harmonica. The Hobos prove you don't need a home planet to feel at home in the universe.",
  },
  {
    emoji: "🔥",
    title: "The Campfire Code",
    body: "No masters, no map, no gatekeepers. Every Hobo looks out for the next. The collection is the camp — and the camp is yours.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="The Lore"
      title="Drifters of the cosmic rail line"
      intro="Space Hobos are the universe's free spirits — scrappy, kind, and always one jump ahead of the next galaxy."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {beats.map((b) => (
          <div key={b.title} className="card p-7">
            <div className="text-3xl">{b.emoji}</div>
            <h3 className="mt-4 font-display text-xl font-semibold text-white">{b.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{b.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
