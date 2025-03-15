import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is our story...</p>
      {/* Navigation back to home also uses client-side routing */}
      <Link href="/">Back to Home</Link>
    </div>
  );
}
