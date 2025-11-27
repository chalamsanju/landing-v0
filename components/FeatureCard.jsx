export default function FeatureCard({ title, desc, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border card-hover text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-slate-600 mt-2">{desc}</p>
    </div>
  );
}
