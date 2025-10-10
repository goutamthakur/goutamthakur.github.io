export default function App() {
  return (
    <>
      <div className="bg-surface text-text-base border border-border p-4">
        <h1 className="text-primary font-bold">Hello, I’m Goutam</h1>
        <p className="text-secondary">Work under progress ☠️</p>
        <p className="text-muted">
          This is a Tailwind + CSS Variable theme setup.
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
