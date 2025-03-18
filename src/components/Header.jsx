const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-md py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-700">Your Name</div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="hover:text-indigo-700 font-medium transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-700 font-medium transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-700 font-medium transition-colors duration-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-700 font-medium transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
