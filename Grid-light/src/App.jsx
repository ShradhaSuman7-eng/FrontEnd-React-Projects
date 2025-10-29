import "./App.css";
import GridLightContainer from "./components/GridLightContainer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-20 shadow-md items-center flex justify-center">
        <h2 className="text-4xl font-bold">Grid Lights</h2>
      </div>
      <GridLightContainer />
    </div>
  );
}

export default App;
