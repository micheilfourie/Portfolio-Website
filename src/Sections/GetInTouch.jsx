import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faAt } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useState } from "react";
import emailjs from "@emailjs/browser";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const GetInTouch = forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
          alert("Failed to send message");
        },
      );
  };
  return (
    <section ref={ref} className="flex flex-col gap-4">
      <h4 className="text-xl font-bold tracking-wider text-white uppercase">
        Get In Touch
      </h4>

      <form
        onSubmit={handleSubmit}
        className="to-navy-500 from-navy-600 flex w-full flex-col gap-4 bg-gradient-to-tr text-white shadow-md placeholder:text-gray-400 max-sm:p-6 min-sm:p-8"
      >
        <div className="group flex">
          <div className="bg-navy-800 group-focus-within:text-navy-500 flex items-center justify-center p-4 transition-colors duration-500 ease-in-out group-focus-within:bg-white max-sm:hidden">
            <FontAwesomeIcon icon={faUser} className="text-md" />
          </div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            value={name}
            required
            className="bg-navy-700 w-full p-4 outline-0"
          />
        </div>

        <div className="group flex">
          <div className="bg-navy-800 group-focus-within:text-navy-500 flex items-center justify-center p-4 transition-colors duration-500 ease-in-out group-focus-within:bg-white max-sm:hidden">
            <FontAwesomeIcon icon={faAt} className="text-md" />
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            value={email}
            required
            className="bg-navy-700 w-full p-4 outline-0"
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
            className="bg-navy-700 scrollbar-hidden h-[200px] w-full resize-none p-4 outline-0"
          />
        </div>

        <button
          type="submit"
          className="bg-accent text-navy-500 font-montserrat mt-2 h-[50px] w-[170px] cursor-pointer text-[13px] font-semibold uppercase transition-all duration-300 ease-in-out hover:-translate-y-[5px]"
        >
          Send Message
        </button>
      </form>
    </section>
  );
});

export default GetInTouch;
