import Link from "next/link";
import Signup from "../pages/Signup.jsx";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav id="navbar" className="bg-zinc-300 p-4 rounded-xl fixed top-6 w-10/12 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex space-x-4">
          <li>
            <Link href="/services" className="hover:text-yellow-900">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-900">
              Layanan
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-900">
              Kontak
            </Link>
          </li>
        </ul>

        {/* Tempatkan brand FixBan di tengah */}
        <h1 className="text-black text-2xl font-bold relative right-16">
          <Link href="/">
          <Image width={400} height={400} src="/img/logofixban2web.png" className="w-44 object-cover" alt="" />
          </Link>
        </h1>

        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-yellow-900">
              <svg
                className="h-6 w-6 text-slate-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </Link>
          </li>

          {/* Link Signup */}
          <li>
            <Link
              href="/Signup"
              className="hover:text-yellow-900"
            >
             Daftar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
