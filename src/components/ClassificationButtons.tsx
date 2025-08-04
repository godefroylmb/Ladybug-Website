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
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setUserGuess(0)}
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
          >
            European
          </button>
          <button
            onClick={() => setUserGuess(1)}
            className="bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700"
          >
            Asian
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
