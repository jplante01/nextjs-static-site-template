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

export default Header;
