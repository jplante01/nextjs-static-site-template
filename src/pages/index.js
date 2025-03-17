// To use client-side navigation, use the following code:
// import Link from 'next/link';
// {/* This link will use client-side navigation */}
// <Link href="/about">About Us</Link>


import Header from '../components/Header';
import HeroSection from '../components/Hero';
import PortfolioGrid from '../components/PortfolioGrid';
import Footer from '../components/Footer';

// Main App Component
const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <PortfolioGrid />
      <Footer />
    </div>
  );
};

export default Home;
