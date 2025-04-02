import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faAt } from "@fortawesome/free-solid-svg-icons";

const GetInTouch = () => {
  return (
    <section id="contact" className="flex flex-col gap-4">
      <h4 className="text-xl font-bold tracking-wider text-white uppercase">
        Get In Touch
      </h4>

      <form className="to-navy-500 from-navy-600 flex w-full flex-col gap-4 bg-gradient-to-tr text-white shadow-md placeholder:text-gray-400 max-sm:p-6 min-sm:p-8">
        <div className="group flex">
          <div className="bg-navy-800 group-focus-within:text-navy-500 flex items-center justify-center p-4 transition-colors duration-500 ease-in-out group-focus-within:bg-white">
            <FontAwesomeIcon icon={faUser} className="text-md" />
          </div>
          <input
            type="text"
            placeholder="Name"
            className="bg-navy-700 w-full p-4 text-sm outline-0"
          />
        </div>

        <div className="group flex">
          <div className="bg-navy-800 group-focus-within:text-navy-500 flex items-center justify-center p-4 transition-colors duration-500 ease-in-out group-focus-within:bg-white">
            <FontAwesomeIcon icon={faAt} className="text-md" />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="bg-navy-700 w-full p-4 text-sm outline-0"
          />
        </div>

        <div className="group flex">
          <div className="bg-navy-800 group-focus-within:text-navy-500 flex items-start justify-center p-4 transition-colors duration-500 ease-in-out group-focus-within:bg-white">
            <FontAwesomeIcon icon={faEnvelope} className="text-md pt-1" />
          </div>
          <textarea
            placeholder="Message"
            className="bg-navy-700 h-[200px] w-full resize-none p-4 text-sm outline-0"
          />
        </div>

        <button className="bg-accent text-navy-500 font-montserrat mt-2 h-[50px] w-[170px] cursor-pointer text-[13px] font-semibold uppercase transition-all duration-300 ease-in-out hover:-translate-y-[5px]">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default GetInTouch;
