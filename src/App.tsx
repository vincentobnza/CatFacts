import { useQuoteStore } from "./store/store";
import { Loader2 } from "lucide-react";

function App() {
  const { text, getRandomQuote, loading } = useQuoteStore();

  return (
    <div className="w-full max-w-screen-md mx-auto p-12 flex flex-col gap-4 justify-center items-center">
      {/* make a random gif image of cats, and make it random when clicks */}
      <img
        src="https://static.vecteezy.com/system/resources/previews/017/303/195/original/hand-drawn-scared-or-sad-cat-illustration-in-doodle-style-png.png"
        alt="cat"
        className="w-40"
      />
      {loading && (
        <Loader2 size={20} className="mt-5 animate-spin text-zinc-900" />
      )}

      {!loading && text && (
        <blockquote className="mt-5 text-lg font-serif text-zinc-950 text-center p-5 border-2 border-dashed border-zinc-900">
          <p>{text}</p>
        </blockquote>
      )}

      <button
        onClick={getRandomQuote}
        disabled={loading}
        className={`mt-12 py-3 px-8 font-bold text-white transition ${
          loading ? "bg-gray-500 cursor-not-allowed" : "bg-zinc-900"
        }`}
      >
        {loading ? "Fetching..." : "Random Cat Fact"}
      </button>
    </div>
  );
}

export default App;
