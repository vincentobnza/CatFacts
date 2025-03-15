import { useQuoteStore } from "./store/store";
import { Loader2 } from "lucide-react";
import { useState } from "react";

function App() {
  const { text, getRandomQuote, loading } = useQuoteStore();
  const [catImage, setCatImage] = useState("https://cataas.com/cat");

  const handleGetRandomQuote = () => {
    getRandomQuote();
    setCatImage(`https://cataas.com/cat?${new Date().getTime()}`);
  };

  return (
    <div className="w-full max-w-screen-md mx-auto p-12 flex flex-col gap-4 justify-center items-center">
      <img
        src={catImage}
        alt="cat"
        className="w-40 h-40 object-cover rounded-md shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
      />
      {loading && (
        <Loader2 size={20} className="mt-5 animate-spin text-zinc-900" />
      )}

      {!loading && text && (
        <blockquote className="mt-5 text-lg font-serif text-zinc-950 text-center p-5 border-2 border-dashed border-zinc-900 bg-zinc-100 rounded-lg shadow-md transition-opacity duration-500 ease-in-out opacity-100">
          <p>{text}</p>
        </blockquote>
      )}

      <button
        onClick={handleGetRandomQuote}
        disabled={loading}
        className="mt-12 py-3 px-8 font-bold text-white transition border-2 border-zinc-800 cursor-pointer text-zinc-900 font-semibold disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg transform hover:scale-105"
      >
        Get Random CatFacts
      </button>
    </div>
  );
}

export default App;
