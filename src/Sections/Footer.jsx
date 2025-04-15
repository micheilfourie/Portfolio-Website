import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="from-navy-600 to-navy-500 flex w-full items-center justify-between gap-1 bg-gradient-to-tr py-5 text-sm text-gray-400 max-md:px-4 min-md:px-8">
      <p className="font-montserrat text-center">&copy; 2025 Micheil Fourie</p>
      <p>
        Powered By <FontAwesomeIcon icon={faReact} /> React
      </p>
    </footer>
  );
};

export default Footer;
