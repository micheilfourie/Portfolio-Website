import {
  InfoMenu,
  Navbar,
  Hero,
  Education,
  Projects,
  GetInTouch,
  // Services,
  Footer,
  ImageViewer,
  ScrollIndicator,
} from "./index.js";
import { useState, useRef } from "react";

import image from "./assets/hero.webp";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const topRef = useRef(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  const handleViewerToggle = (index) => {
    setImageViewerOpen(!imageViewerOpen);
    if (index) {
      setImageIndex(index);
    } else {
      setImageIndex(0);
    }
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
          handleViewerToggle={handleViewerToggle}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          imageViewerOpen={imageViewerOpen}
        />

        <InfoMenu menuOpen={menuOpen} />

        <div className="relative h-[100dvh] overflow-hidden">
          <img
            src={image}
            alt="fixed background image"
            loading="lazy"
            className="absolute top-0 right-0 h-[400px] w-full object-cover object-bottom max-md:hidden"
          />

          <div
            onScroll={() => setShowScrollIndicator(false)}
            ref={topRef}
            className="scrollbar-hidden relative flex h-full flex-col gap-14 overflow-y-scroll pb-0"
          >
            <ScrollIndicator
              showScrollIndicator={showScrollIndicator}
              imageViewerOpen={imageViewerOpen}
            />
            <Hero
              handleScroll={handleScroll}
              projectRef={projectRef}
              contactRef={contactRef}
            />
            {/* <Services handleScroll={handleScroll} contactRef={contactRef} /> */}
            <Education handleViewerToggle={handleViewerToggle} />
            <Projects ref={projectRef} />
            <GetInTouch ref={contactRef} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
