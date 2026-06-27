export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="container-px py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 text-slate-400">{intro}</p>}
      </div>
      <div className="mt-14">{children}</div>
    </section>
  );
}
