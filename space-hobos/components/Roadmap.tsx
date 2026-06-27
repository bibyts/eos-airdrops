import Section from "./Section";
import { roadmap } from "@/lib/site";

const dot: Record<string, string> = {
  done: "bg-signal",
  active: "bg-ember animate-pulse",
  upcoming: "bg-white/20",
};

const badge: Record<string, string> = {
  done: "text-signal border-signal/40",
  active: "text-ember border-ember/40",
  upcoming: "text-slate-400 border-white/15",
};

export default function Roadmap() {
  return (
    <Section
      id="roadmap"
      eyebrow="The Journey"
      title="The road ahead"
      intro="Where the boxcar is headed. Plans evolve with the camp — the community steers the train."
    >
      <ol className="relative mx-auto max-w-3xl border-l border-white/10 pl-8">
        {roadmap.map((p) => (
          <li key={p.phase} className="relative mb-10 last:mb-0">
            <span
              className={`absolute -left-[41px] mt-1.5 h-4 w-4 rounded-full ring-4 ring-void-900 ${dot[p.status]}`}
            />
            <div className="card p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-sm font-semibold uppercase tracking-widest text-slate-400">
                  {p.phase}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${badge[p.status]}`}
                >
                  {p.status}
                </span>
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{p.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-slate-400">
                    <span className="text-signal">▹</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
