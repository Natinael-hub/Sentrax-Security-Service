export default function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="py-14">
      <div className="container">
        {eyebrow ? <div className="badge">{eyebrow}</div> : null}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        {children ? <div className="mt-6 text-steel">{children}</div> : null}
      </div>
    </section>
  );
}
