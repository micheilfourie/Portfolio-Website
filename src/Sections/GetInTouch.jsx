import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faAt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useState } from "react";
import emailjs from "@emailjs/browser";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const GetInTouch = forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleMessageSend();
    ClearAll();
  };

  const ClearAll = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleMessageSend = () => {
    setIsLoading(true);
    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: name,
          email: email,
          message: message,
        },
        publicKey,
      )
      .then(
        () => {
          alert("Message sent successfully");
        },
        (e) => {
          console.error("Message sending failed:", e);
          alert(
            "Failed to send message, please make sure the provided email is valid.",
          );
        },
      )
      .finally(() => setIsLoading(false));
  };
  return (
    <section
      ref={ref}
      className="to-navy-500 from-navy-600 bg-gradient-to-tr shadow-md"
    >
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-2 px-8 py-6 text-sm text-white placeholder:text-gray-400 max-md:p-4"
      >
        <h4 className="mb-3 text-xl font-bold tracking-wider text-white uppercase">
          Get In Touch
        </h4>
        <div className="group flex">
          <div className="bg-navy-800 group-focus-within:text-navy-500 flex items-center justify-center p-4 transition-colors duration-500 ease-in-out group-focus-within:bg-white max-sm:hidden">
            <FontAwesomeIcon icon={faUser} className="text-md px-[0.05rem]" />
          </div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            value={name}
            required
            className="bg-navy-700 border-navy-700 w-full border-2 p-3 outline-0 transition-all duration-500 ease-in-out group-focus-within:border-white"
          />
        </div>

        <div className="group flex">
          <div className="bg-navy-800 group-focus-within:text-navy-500 group flex items-center justify-center p-4 transition-colors duration-500 ease-in-out group-focus-within:bg-white focus-within:border-white max-sm:hidden">
            <FontAwesomeIcon icon={faAt} className="text-md" />
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            value={email}
            required
            className="bg-navy-700 border-navy-700 w-full border-2 p-3 outline-0 transition-all duration-500 ease-in-out group-focus-within:border-white"
          />
        </div>

        <div className="group flex">
          <div className="bg-navy-800 group-focus-within:text-navy-500 flex items-start justify-center p-4 transition-colors duration-500 ease-in-out group-focus-within:bg-white max-sm:hidden">
            <FontAwesomeIcon icon={faEnvelope} className="text-md pt-1" />
          </div>

          <textarea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            value={message}
            required
            className="bg-navy-700 scrollbar-hidden border-navy-700 h-[200px] w-full resize-none border-2 p-3 outline-0 transition-all duration-500 ease-in-out group-focus-within:border-white"
          />
        </div>

        <div className="mt-2 flex items-end justify-start gap-9 pb-2 max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-5">
          {isLoading ? (
            <div className="bg-accent text-navy-500 font-montserrat mt-2 flex h-[50px] w-[170px] items-center justify-center text-[13px] font-semibold uppercase">
              Sending
              <svg
                aria-hidden="true"
                className="dark:text-navy-800 ml-4 inline size-7 animate-spin fill-white text-gray-200"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            <button
              type="submit"
              className="bg-accent text-navy-500 font-montserrat mt-2 h-[50px] w-[170px] cursor-pointer text-[13px] font-semibold uppercase transition-all duration-300 ease-in-out hover:-translate-y-[5px]"
            >
              Send Message
            </button>
          )}

          <div className="mt-2 flex flex-col justify-between gap-1 text-sm text-gray-400">
            <p>
              <FontAwesomeIcon icon={faPhone} className="mr-3" />
              072 397 3298
            </p>
            <p className="tracking-wide">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
              fouriemicheil1@gmail.com
            </p>
          </div>
        </div>
      </form>
    </section>
  );
});

export default GetInTouch;
