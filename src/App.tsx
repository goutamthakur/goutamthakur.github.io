import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-text-primary transition-colors">
        <h1 className="text-4xl font-bold text-primary">Hello, I’m Goutam</h1>
        <p className="text-text-secondary">
         Work under progress ☠️
        </p>
        <button
          onClick={() => document.documentElement.classList.toggle("dark")}
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
}

export default App;
