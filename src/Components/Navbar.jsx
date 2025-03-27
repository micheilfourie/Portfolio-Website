import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <div className="fixed top-0 left-1/2 z-50 flex h-[60px] w-full max-w-screen-xl -translate-x-1/2 justify-end bg-gradient-to-tl from-[#23232D] to-[#252433] px-4 shadow-sm min-lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex cursor-pointer items-center gap-2 text-white"
        >
          <FontAwesomeIcon icon={faBars} className="text-3xl" />
        </button>
      </div>
      <div
        onClick={() => setMenuOpen(false)}
        className={`bg-navy-700 fixed top-0 left-0 z-20 flex h-screen w-screen max-w-screen-xl cursor-pointer justify-end opacity-50 shadow-sm min-lg:hidden ${!menuOpen && "hidden"}`}
      ></div>
    </>
  );
};

export default Navbar;
