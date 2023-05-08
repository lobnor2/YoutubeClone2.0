import "./App.css";
import { AppContext } from "./context/contextApi";
import Header from "./components/Header";
const App = () => {
  return (
    <AppContext>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2>this is heading 2</h2>
    </AppContext>
  );
};

export default App;
