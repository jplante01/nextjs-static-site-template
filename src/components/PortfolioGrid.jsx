import PortfolioCard from './PortfolioCard';

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

export default PortfolioGrid;
