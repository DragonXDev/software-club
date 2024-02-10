// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="py-6 w-full">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <Link legacyBehavior href="/">
          <a className="text-2xl font-extrabold tracking-tighter text-black" href="/">Software Club</a>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/signin" legacyBehavior>
            <a className="font-medium text-gray-700 hover:text-black transition-colors"  href="/">
              Sign in
            </a>
          </Link>
          <Link href="/signup" legacyBehavior>
            <a className="font-medium text-gray-700 hover:text-black transition-colors"  href="/">
              Sign up
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
