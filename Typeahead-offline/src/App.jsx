import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl py-5 w-full font-bold shadow-md text-center ">
        Typeahead (offline)
      </h2>
      <Container />
    </div>
  );
}

export default App;
