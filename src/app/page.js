// pages/page.js
import Link from 'next/link';
import Navbar from '@/components/Navbar'; // Ensure the path to Navbar component is correct.
import { Input } from '@/components/ui/input'; // Update the path as necessary.
import { Button } from '@/components/ui/button'; // Update the path as necessary.

export default function Component() {
  return (
    <div className="bg-white">
      <Navbar />
      <header className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center shadow-md">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl text-black">
          The Software Club
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          A community for developers to collaborate, learn, and grow together.
        </p>
        <Link legacyBehavior href="#join">
          <a className="mt-8 inline-block rounded-md bg-black px-8 py-3 text-sm font-medium text-white shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50" href="/">
            Join the Club
          </a>
        </Link>
      </header>
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center shadow-md">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-black">
          What we offer
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Access to exclusive resources, workshops, and a network of passionate developers.
        </p>
        {/* Replace with actual images and content */}
      </section>
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center shadow-md">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-black">
          Meet our Members
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Trusted by the best teams in the world. We help teams of all sizes.
        </p>
        {/* Replace with actual images and content */}
      </section>
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center shadow-md">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-black">
          Join the Club
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Ready to take your skills to the next level? Become a member today.
        </p>
        <form className="mx-auto mt-8 max-w-sm space-y-4">
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="Email" type="email" />
          <Button className="w-full bg-black text-white py-3 rounded-md shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">Join the Club</Button>
        </form>
      </section>
      <footer className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center shadow-md">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-black">
          Contact Us
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Have questions? Send us an email at <span className="font-medium">info@example.com</span>
        </p>
      </footer>
    </div>
  );
}
