import Form from "../molecules/Form";

const MainView = () => {
  return (
    <main className="w-full h-screen center relative">
      <div className="w-full sm:w-[95%] md:w-[80%] h-auto z-[-10] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src="https://v0.dev/v0-background.svg"
          className="w-full h-auto"
          alt="logo-masro9"
        />
      </div>

      <Form />
    </main>
  );
};

export default MainView;
