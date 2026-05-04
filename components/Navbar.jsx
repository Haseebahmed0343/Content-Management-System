import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-slate-900 backdrop-blur-md border-b border-gray-800 text-white">
      {/* Logo Area */}
      <Link href="/" className="group">
        <h1 className="text-xl font-bold tracking-tighter transition-colors group-hover:text-blue-400">
          MY<span className="text-blue-500 group-hover:text-white"> APP</span>
        </h1>
      </Link>

      <Link
        href="/admin"
        className="text-sm font-medium text-gray-800 bg-blue-500 transition-all duration-300 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-lg"
      >
        Admin Dashboard
      </Link>
    </nav>
  );
}
