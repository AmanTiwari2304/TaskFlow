const features = [
  { title: "Fast", desc: "Optimized with SSR & SSG" },
  { title: "SEO Friendly", desc: "Built-in SEO support" },
  { title: "Scalable", desc: "Perfect for production apps" },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {features.map((item, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
