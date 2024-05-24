import "./styles/tail.css";
import MainView from "./components/organisms/MainView";
import NavBar from "./components/organisms/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PromptResult from "./components/organisms/PromptResult";
import FormProvider from "./providers/FormProvider";

function App() {
  return (
    <div className="w-full min-h-screen ">
      <Router>
        <NavBar />
        <FormProvider>
          <Routes>
            <Route path="/" Component={MainView} />
            <Route path="/craft/:prompt" Component={PromptResult} />
          </Routes>
        </FormProvider>
      </Router>
    </div>
  );
}

export default App;
