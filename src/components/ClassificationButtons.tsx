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
            className="w-full bg-red-600 text-white px-6 py-1.5 rounded-full text-sm sm:text-base hover:bg-red-700"
          >
            Coccinella septempunctata (European)
          </button>
          <button
            onClick={() => setUserGuess(1)}
            className="w-full bg-yellow-600 text-white px-6 py-1.5 rounded-full text-sm sm:text-base hover:bg-yellow-700"
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
