import "./App.css";
import ChessBoard from "./components/ChessBoard";

function App() {
  return (
    <>
      <div className="w-full h-20 shadow-md items-center flex justify-center">
        <h2 className="text-4xl font-bold">Chess Board</h2>
      </div>
      <ChessBoard />
    </>
  );
}

export default App;
