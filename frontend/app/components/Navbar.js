const Navbar = () => {
  return (
    <>
      <header className="flex flex-col lg:flex-row gap-3 lg:gap-3 items-center justify-between border-b py-4 md:py-8 mb-12 lg:mb-0">
        <a
          href="#"
          className="inline-flex items-center gap-2.5 font-bold text-black"
          aria-label="logo"
        >
          <span className="text-3xl lg:text-4xl">
            <i className="ri-brain-fill text-orange-500"></i>
          </span>
          <span className="text-xl lg:text-2xl tracking-wide">
            Brain Tumor<span className="text-orange-500"> Classify</span>
          </span>
        </a>

        <a
          href="https://github.com/somenath203/brain-tumor-classification-multiclass-using-tensorflow"
          target="_blank"
        >
          <i className="fa-brands fa-github text-3xl text-orange-500 cursor-pointer"></i>
        </a>
      </header>
    </>
  );
};

export default Navbar;
