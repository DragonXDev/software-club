
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    (<div
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="py-6">
        <div className="container px-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link className="flex space-x-2 font-medium" href="#">
                <span className="text-2xl font-extrabold tracking-tighter">Software Club</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                className="font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-300"
                href="#">
                Sign in
              </Link>
              <Link
                className="font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-300"
                href="#">
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <header className="py-16 md:py-24 lg:py-32">
        <div
          className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">The Software Club</h1>
            <p
              className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A community for developers to collaborate, learn, and grow together.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="#">
              Join the Club
            </Link>
          </div>
        </div>
      </header>
      <section className="py-12 md:py-24 lg:py-32">
        <div
          className="container flex flex-col gap-4 px-4 text-center md:gap-10 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What we offer</h2>
            <p
              className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Access to exclusive resources, workshops, and a network of passionate developers.
            </p>
          </div>
          <div
            className="grid max-w-sm grid-cols-2 gap-4 mx-auto lg:max-w-5xl lg:grid-cols-4">
            <div className="flex flex-col items-center gap-1">
              <img
                alt="Icon"
                className="rounded-full border border-gray-200 aspect-square overflow-hidden object-cover dark:border-gray-800"
                height="64"
                src="/placeholder.svg"
                width="64" />
              <p className="text-sm font-medium">Workshops</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                alt="Icon"
                className="rounded-full border border-gray-200 aspect-square overflow-hidden object-cover dark:border-gray-800"
                height="64"
                src="/placeholder.svg"
                width="64" />
              <p className="text-sm font-medium">Resources</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                alt="Icon"
                className="rounded-full border border-gray-200 aspect-square overflow-hidden object-cover dark:border-gray-800"
                height="64"
                src="/placeholder.svg"
                width="64" />
              <p className="text-sm font-medium">Community</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img
                alt="Icon"
                className="rounded-full border border-gray-200 aspect-square overflow-hidden object-cover dark:border-gray-800"
                height="64"
                src="/placeholder.svg"
                width="64" />
              <p className="text-sm font-medium">Learning</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50/90 py-12 md:py-24 lg:py-32">
        <div
          className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet our Members</h2>
            <p
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Trusted by the best teams in the world. We help teams of all sizes.
            </p>
          </div>
          <div
            className="grid w-full grid-cols-2 items-stretch justify-center md:grid-cols-3 lg:grid-cols-4">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140" />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140" />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140" />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div
          className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join the Club</h2>
            <p
              className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to take your skills to the next level? Become a member today.
            </p>
          </div>
          <form className="mx-auto max-w-sm space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
            </div>
            <Input placeholder="Email" type="email" />
            <Button className="w-full">Join the Club</Button>
          </form>
        </div>
      </section>
      <footer className="py-12 md:py-24 lg:py-32">
        <div
          className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
            <p
              className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have questions? Send us an email at
              <span className="font-medium">info@example.com</span>
            </p>
          </div>
        </div>
      </footer>
    </div>)
  );
}
