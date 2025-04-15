import Logo from "../assets/logo-negative.svg";
import profileImage from "../assets/profile-image.webp";

const Navbar = ({ menuOpen, handleMenuToggle, handleScroll }) => {
  return (
    <>
      <nav className="from-navy-600 to-navy-500 fixed top-0 left-1/2 z-50 flex h-[60px] w-full max-w-screen-xl -translate-x-1/2 items-center justify-between bg-gradient-to-tr px-4 shadow-md min-lg:hidden">
        <button onClick={handleScroll} className="ml-1 cursor-pointer">
          <img
            src={Logo}
            alt="logo"
            className="h-9 object-contain object-left"
          />
        </button>
        <button onClick={handleMenuToggle} className="relative cursor-pointer">
          <div className="relative flex h-[60px] items-center justify-center overflow-hidden transition-all duration-200">
            <div className="flex h-full origin-center flex-col justify-center overflow-hidden transition-all duration-300">
              <div
                className={` ${menuOpen ? "h-0 opacity-0" : "delay-300"} translate-all flex size-10 items-center justify-center overflow-hidden rounded-full shadow-md duration-300 ease-in-out`}
              >
                <img
                  src={profileImage}
                  alt="profile image"
                  className="object-contain object-center brightness-110"
                />
              </div>

              <div
                className={`absolute top-1/2 left-[0.4rem] flex w-0 -translate-y-1/2 items-center justify-between transition-all duration-300 group-focus:w-12 ${menuOpen ? "opacity-100 delay-150" : "opacity-0 delay-300"}`}
              >
                <div
                  className={`absolute h-[3px] w-7 rotate-0 bg-white transition-all duration-300 ${
                    menuOpen ? "rotate-45 delay-300" : "rotate-0"
                  }`}
                ></div>
                <div
                  className={`absolute h-[3px] w-7 -rotate-0 bg-white transition-all duration-300 ${
                    menuOpen ? "-rotate-45 delay-300" : "rotate-0"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </button>
      </nav>
      {menuOpen && (
        <div
          onClick={handleMenuToggle}
          className={`bg-navy-900/80 fixed top-0 left-0 z-20 flex h-[100dvh] w-[100dvw] cursor-pointer min-lg:hidden`}
        ></div>
      )}
    </>
  );
};

export default Navbar;
