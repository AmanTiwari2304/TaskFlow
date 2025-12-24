
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold">
        Build Faster with Next.js
      </h1>

      <p className="mt-4 text-gray-600 max-w-xl">
        A modern platform to build scalable, high-performance web applications.
      </p>

      <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:opacity-90">
        Get Started
      </button>
    </section>
  );
}
