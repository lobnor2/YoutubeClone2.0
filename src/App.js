import "./App.css";
import { AppContext } from "./context/contextApi";

function App() {
  return (
    <AppContext>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </AppContext>
  );
}

export default App;
