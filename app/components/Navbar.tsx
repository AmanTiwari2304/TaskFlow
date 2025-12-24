export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow">
      <h1 className="text-xl font-bold">TaskFlow</h1>
      <button className="bg-black text-white px-4 py-2 rounded">
        Get Started
      </button>
    </nav>
  );
}
