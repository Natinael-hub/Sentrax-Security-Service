export default function FeatureCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="card p-6">
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-2 text-sm text-steel leading-relaxed">{desc}</p>
    </div>
  );
}
