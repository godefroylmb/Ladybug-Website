"use client";

import { useState } from "react";
import ResultExplanation from "./ResultExplanation";

type Props = {
  predicted: number;
  truth: number;
};

export default function ClassificationButtons({ predicted, truth }: Props) {
  const [userGuess, setUserGuess] = useState<number | null>(null);

  return (
    <>
      {userGuess === null ? (
        <div className="grid grid-cols-2 gap-4 mt-4 w-full max-w-2xl">
          <button
            onClick={() => setUserGuess(0)}
            className="w-full py-2 px-6 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium shadow transition-transform hover:scale-105 duration-200"
          >
            Coccinella septempunctata (European)
          </button>
          <button
            onClick={() => setUserGuess(1)}
            className="w-full py-2 px-6 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium shadow transition-transform hover:scale-105 duration-200"
          >
            Harmonia axyridis (Asian)
          </button>
        </div>
      ) : (
        <ResultExplanation
          userGuess={userGuess}
          predicted={predicted}
          truth={truth}
        />
      )}
    </>
  );
}
