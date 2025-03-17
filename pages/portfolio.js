import PortfolioGrid from '../components/PortfolioGrid';

export default function PortfolioPage({ portfolioItems }) {
  return <PortfolioGrid portfolioItems={portfolioItems} />;
}

export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');
  
  // Read the JSON file
  const projectsData = fs.readFileSync(path.join(process.cwd(), 'data/projects.json'), 'utf-8');
  const portfolioItems = JSON.parse(projectsData);

  return {
    props: {
      portfolioItems,
    },
  };
} 