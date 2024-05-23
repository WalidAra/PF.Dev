import "./App.css";
import MainView from "./components/organisms/MainView";
import NavBar from "./components/organisms/NavBar";

function App() {
  return (
    <div className="w-full min-h-screen ">
      <NavBar />
      <MainView />
    </div>
  );
}

export default App;
