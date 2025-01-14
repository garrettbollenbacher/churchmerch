import Link from "next/link";
import { Home } from "lucide-react";
import { FaCross } from "react-icons/fa";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/" passHref legacyBehavior>
            <a className="flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition-colors">
              <Home size={24} />
              <span className="font-semibold">Home</span>
            </a>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <a className="flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition-colors">
              <span className="font-semibold">About</span>
            </a>
          </Link>
        </div>
        <Link href="/" passHref legacyBehavior>
          <a className="text-gray-800 hover:text-gray-600 transition-colors">
            <FaCross size={24} />
          </a>
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">churchmerch</h1>
      </div>
    </nav>
  );
};
