import backgroundImage from "./blurry-gradient-haikei.png";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// import Duel from "./components/DuelPage/Duel";


const HomePage = lazy(() => import("./pages/homepage"));
const FirstPage = lazy(() => import("./pages/firstpage"));
const GamePage = lazy(() => import("./pages/playpage"));
const DuelsPage = lazy(() => import("./pages/duelpage"));

function App() {
  return (
    <>
      
        
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="App"
        >
        

          <main>
            <Suspense fallback={"Loading page..."}>
              <Routes>
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/firstpage" element={<FirstPage />} />
                <Route path="/playpage" element={<GamePage />} />
                <Route path="/duelpage" element={<DuelsPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
               
              </Routes>
            </Suspense>
          </main>
        </div>
        
    
    </>
  );
}

export default App;
