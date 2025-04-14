import Logo from "../assets/logo-negative.svg";
import profileImage from "../assets/profile-image.webp";

const Navbar = ({ menuOpen, handleMenuToggle, handleScroll }) => {
  return (
    <>
      <nav className="from-navy-600 to-navy-500 fixed top-0 left-1/2 z-50 flex h-[60px] w-full max-w-screen-xl -translate-x-1/2 items-center justify-end bg-gradient-to-tr px-4 shadow-md min-lg:hidden">
        <button onClick={handleMenuToggle} className="relative cursor-pointer">
          <div className="relative flex h-[60px] items-center justify-center overflow-hidden transition-all duration-200">
            <div className="flex h-full origin-center flex-col justify-center overflow-hidden transition-all duration-300">
              <div
                className={` ${menuOpen ? "size-0 opacity-0" : ""} translate-all size-10 overflow-hidden rounded-full shadow-md duration-300 ease-in-out`}
              >
                <img
                  src={profileImage}
                  alt="profile image"
                  className="object-contain object-center"
                />
              </div>

              <div
                className={`absolute top-1/2 left-[0.4rem] -translate-y-1/2 items-center justify-between transition-all duration-300 ${
                  menuOpen ? "opacity-100" : "opacity-0"
                } flex w-0 group-focus:w-12`}
              >
                <div
                  className={`absolute h-[3px] w-7 rotate-0 bg-white transition-all delay-300 duration-500 ${
                    menuOpen ? "rotate-45" : ""
                  }`}
                ></div>
                <div
                  className={`absolute h-[3px] w-7 -rotate-0 bg-white transition-all delay-300 duration-500 ${
                    menuOpen ? "-rotate-45" : ""
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
