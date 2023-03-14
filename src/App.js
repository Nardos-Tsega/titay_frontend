import Video from "./components/Video";

function App() {
  return (
    <div className="h-screen bg-slate-700 grid place-content-center">
      <div className="relative h-[500px] rounded-lg overflow-scroll w-[95%] max-w-[660px] snap-y scrollbar-hide">
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
