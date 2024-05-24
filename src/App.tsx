import "./styles/tail.css";
// import MainView from "./components/organisms/MainView";
import NavBar from "./components/organisms/NavBar";
// import PromptResult from "./components/organisms/PromptResult";
// import FormProvider from "./providers/FormProvider";

function App() {
  return (
    <div className="w-full min-h-screen ">
      <NavBar />
      {/* <FormProvider>
        <MainView />
        <PromptResult />
      </FormProvider> */}
    </div>
  );
}

export default App;
