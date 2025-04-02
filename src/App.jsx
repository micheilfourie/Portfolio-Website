import { InfoMenu, BodyMain, Navbar } from "./index.js";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-navy-900 h-full w-full">
      <div className="bg-navy-800 mx-auto flex h-full w-full max-w-screen-xl shadow-md">
        <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <InfoMenu menuOpen={menuOpen} />
        <BodyMain />
      </div>
    </div>
  );
}

export default App;
