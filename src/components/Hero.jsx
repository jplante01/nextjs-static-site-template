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

export default HeroSection;
