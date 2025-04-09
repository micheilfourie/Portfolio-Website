import {
  InfoMenu,
  Navbar,
  Hero,
  Education,
  Projects,
  GetInTouch,
  Services,
  Footer,
  ImageViewer,
} from "./index.js";
import { useState, useRef } from "react";

import image from "./assets/hero.webp";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const [imageToView, setImageToView] = useState(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const topRef = useRef(null);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  const handleViewerToggle = (cert) => {
    setImageViewerOpen(!imageViewerOpen);
    setImageToView(cert);
  };

  const handleScroll = (ref = null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (topRef.current) {
      topRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-navy-900 h-full w-full">
      <div className="bg-navy-800 mx-auto flex h-full w-full max-w-screen-xl shadow-md">
        <Navbar
          handleMenuToggle={handleMenuToggle}
          menuOpen={menuOpen}
          handleScroll={handleScroll}
          topRef={topRef}
        />

        <ImageViewer
          imageViewerOpen={imageViewerOpen}
          handleViewerToggle={handleViewerToggle}
          imageToView={imageToView}
        />

        <InfoMenu menuOpen={menuOpen} />

        <div className="relative h-screen overflow-hidden">
          <img
            src={image}
            alt="fixed background image"
            loading="lazy"
            className="absolute top-0 right-0 h-[400px] w-full object-cover object-bottom max-md:hidden"
          />

          <div
            ref={topRef}
            className="scrollbar-hidden relative flex h-full flex-col gap-14 overflow-y-scroll p-8 pb-0 max-lg:p-4"
          >
            <Hero
              handleScroll={handleScroll}
              projectRef={projectRef}
              contactRef={contactRef}
            />
            <Services handleScroll={handleScroll} contactRef={contactRef} />
            <Projects ref={projectRef} />
            <Education handleViewerToggle={handleViewerToggle} />
            <GetInTouch ref={contactRef} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
