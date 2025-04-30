import { useState } from "react";
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import { SignIn } from "./components/sections/SignIn";
import Dashboard from "./components/sections/Dashboard";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-white`}
      >

      <SignIn />
        
      </div>
    </>
  );
}


export default App
