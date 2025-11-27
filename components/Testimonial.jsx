export default function Testimonial({ quote, name, title }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border card-hover">
      <p className="text-slate-700 text-lg">“{quote}”</p>
      <div className="mt-4">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-sm text-slate-500">{title}</div>
      </div>
    </div>
  );
}
