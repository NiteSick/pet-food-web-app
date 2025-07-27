import "./App.css";

function App() {
  return (
    <div className="bg-brand-primary p-8 m-4 rounded-lg ">
      <h1 className="text-3xl font-bold underline text-white">Hello world!</h1>
      <p className="text-brand-accent mt-4">Custom brand accent color!</p>
      <div className="mt-6 space-y-2">
        <div className="bg-brand-secondary text-white p-3 rounded">
          Brand Secondary Color
        </div>
        <div className="bg-custom-purple text-white p-3 rounded">
          Custom Purple Color
        </div>
        <div className="bg-custom-pink text-white p-3 rounded">
          Custom Pink Color
        </div>
      </div>
    </div>
  );
}

export default App;
