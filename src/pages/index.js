import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-red-500">
      <h1>Welcome to my statically generated site</h1>
      {/* This link will use client-side navigation */}
      <Link href="/about">About Us</Link>
    </div>
  );
}
