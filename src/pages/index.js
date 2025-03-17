// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div className="bg-red-500">
//       <h1>Welcome to my statically generated site</h1>
//       {/* This link will use client-side navigation */}
//       <Link href="/about">About Us</Link>
//     </div>
//   );
// }

// Header Component
const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-600">Your Name</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-indigo-700 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m Your Name</h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            A passionate developer focused on creating beautiful and functional web experiences
          </p>
          <button className="bg-white text-indigo-700 font-medium py-2 px-6 rounded-lg hover:bg-indigo-100 transition-colors">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

// Portfolio Card Component
const PortfolioCard = ({ image, title, description, tags, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <a href={link} className="text-indigo-600 font-medium hover:text-indigo-800">
          View Project →
        </a>
      </div>
    </div>
  );
};

// Portfolio Grid Component
const PortfolioGrid = () => {
  // Sample portfolio items data
  const portfolioItems = [
    {
      id: 1,
      image: '/api/placeholder/600/400',
      title: 'Project Name',
      description: 'Short description of the project. Just a couple of sentences to give context.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
    },
    {
      id: 2,
      image: '/api/placeholder/600/400',
      title: 'Project Name',
      description: 'Short description of the project. Just a couple of sentences to give context.',
      tags: ['React', 'Tailwind', 'Firebase'],
      link: '#',
    },
    {
      id: 3,
      image: '/api/placeholder/600/400',
      title: 'Project Name',
      description: 'Short description of the project. Just a couple of sentences to give context.',
      tags: ['Node.js', 'Express', 'MongoDB'],
      link: '#',
    },
    {
      id: 4,
      image: '/api/placeholder/600/400',
      title: 'Project Name',
      description: 'Short description of the project. Just a couple of sentences to give context.',
      tags: ['Vue', 'Vuex', 'SCSS'],
      link: '#',
    },
    {
      id: 5,
      image: '/api/placeholder/600/400',
      title: 'Project Name',
      description: 'Short description of the project. Just a couple of sentences to give context.',
      tags: ['TypeScript', 'Next.js', 'Vercel'],
      link: '#',
    },
    {
      id: 6,
      image: '/api/placeholder/600/400',
      title: 'Project Name',
      description: 'Short description of the project. Just a couple of sentences to give context.',
      tags: ['WordPress', 'PHP', 'MySQL'],
      link: '#',
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              tags={item.tags}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Your Name</h3>
            <p className="text-gray-300">
              A passionate developer focused on creating beautiful and functional web experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: your.email@example.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Location: City, Country</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {/* GitHub Icon */}
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>

              {/* Twitter Icon */}
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

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
