"use client"
import React, { useState } from 'react';
import Navbar from '@/components/Navbar'; // Adjust based on your actual import path

export default function Page() {
  const [joinClicked, setJoinClicked] = useState(false);

  const handleJoinClick = () => {
    setJoinClicked(true);
    setTimeout(() => {
      // Redirect or change screen state here after the animation
      console.log('Redirecting or changing screen state');
      // Example: window.location.href = '/new-page';
    }, 1000); // This duration should match your CSS animation
  };

  return (
    <div className="relative bg-white min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center shadow-md fadeIn mt-[-72px]">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl text-black">
          The Software Club
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          A community for developers to collaborate, learn, and grow together.
        </p>
        <button
          onClick={handleJoinClick}
          type="button"
          className={`scale-up mt-8 inline-block rounded-md bg-black px-8 py-3 text-sm font-medium text-white shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 ${joinClicked ? 'fill-screen' : ''}`}
        >
          Join the Club
        </button>
        {joinClicked && <div className="spreadFill"/>}
      </div>
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center shadow-md fadeIn">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-black">
          What we offer
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Access to resources, workshops, and a network of passionate developers.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center shadow-md fadeIn">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-black">
          Meet our Members
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Trusted by the best teams in the world. We help teams of all sizes.
        </p>
      </section>
      <footer className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center shadow-md fadeIn">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-black">
          Contact Us
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Have questions? Send us an email at <span className="font-medium">amaarxdev@gmail.com</span>
        </p>
      </footer>
    </div>
  );
}
