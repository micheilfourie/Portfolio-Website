import { InfoMenu, BodyMain } from "./index.js";

function App() {
  return (
    <div className="bg-navy-900 h-full w-full p-4">
      <div className="bg-navy-800 mx-auto grid h-full w-full max-w-screen-xl grid-cols-[300px_1fr]">
        <InfoMenu />
        <BodyMain />
      </div>
    </div>
  );
}

export default App;
