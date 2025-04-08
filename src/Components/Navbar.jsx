import Logo from "../assets/Logo_Offwhite.svg";

const Navbar = ({ menuOpen, handleMenuToggle, handleScroll }) => {
  return (
    <>
      <nav className="fixed top-0 left-1/2 z-50 flex h-[60px] w-full max-w-screen-xl -translate-x-1/2 items-center justify-between bg-gradient-to-tr from-[#23232D] to-[#252433] px-6 shadow-sm min-lg:hidden">
        <button onClick={() => handleScroll()} className="cursor-pointer">
          <img src={Logo} alt="" className="h-[35px]" />
        </button>

        <button onClick={handleMenuToggle} className="relative cursor-pointer">
          <div className="relative flex h-[50px] transform items-center justify-center overflow-hidden transition-all duration-200">
            <div className="flex h-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
              <div
                className={`h-[3px] w-7 origin-left transform bg-white transition-all duration-300 ${
                  menuOpen ? "translate-x-10" : ""
                }`}
              ></div>
              <div
                className={`h-[3px] w-7 transform rounded bg-white transition-all duration-300 ${
                  menuOpen ? "translate-x-10" : ""
                } delay-75`}
              ></div>
              <div
                className={`h-[3px] w-7 origin-left transform bg-white transition-all duration-300 ${
                  menuOpen ? "translate-x-10" : ""
                } delay-150`}
              ></div>

              <div
                className={`absolute top-2.5 -translate-x-10 transform items-center justify-between transition-all duration-500 ${
                  menuOpen ? "translate-x-0" : ""
                } flex w-0 group-focus:w-12`}
              >
                <div
                  className={`absolute h-[3px] w-7 rotate-0 transform bg-white transition-all delay-300 duration-500 ${
                    menuOpen ? "rotate-45" : ""
                  }`}
                ></div>
                <div
                  className={`absolute h-[3px] w-7 -rotate-0 transform bg-white transition-all delay-300 duration-500 ${
                    menuOpen ? "-rotate-45" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </button>
      </nav>
      <div
        onClick={handleMenuToggle}
        className={`bg-navy-700 fixed top-0 left-0 z-20 flex h-screen w-screen max-w-screen-xl cursor-pointer justify-end opacity-50 shadow-sm min-lg:hidden ${!menuOpen && "hidden"}`}
      ></div>
    </>
  );
};

export default Navbar;
