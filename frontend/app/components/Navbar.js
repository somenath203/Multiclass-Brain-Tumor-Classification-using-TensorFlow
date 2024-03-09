const Navbar = () => {
  return (
    <>
      <header className="flex items-center justify-between border-b py-4 md:py-8 mb-12 lg:mb-0">
        <a
          href="/"
          className="inline-flex items-center gap-2.5 font-bold text-black"
          aria-label="logo"
        >
          <span className="text-4xl">
            <i className="ri-brain-fill text-orange-500"></i>
          </span>
          <span className="text-2xl tracking-wide">
          Brain Tumor<span className="text-orange-500"> Classify</span>
          </span>
        </a>

        <i className="fa-brands fa-github text-3xl text-orange-500"></i>
      </header>
    </>
  );
};

export default Navbar;
