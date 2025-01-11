import Link from "next/link";
import { Home } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition-colors"
        >
          <Home size={24} />
          <span className="font-semibold">Home</span>
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">churchmerch</h1>
      </div>
    </nav>
  );
};
