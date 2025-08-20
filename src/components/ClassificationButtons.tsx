"use client";

type Props = {
  predicted: number;
  truth: number;
  onGuess: (guess: number) => void;
};

export default function ClassificationButtons({ predicted, truth, onGuess }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4 w-full">
      <button
        onClick={() => onGuess(0)}
        className="w-full py-2 px-6 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium shadow"
      >
        Coccinella septempunctata (European)
      </button>
      <button
        onClick={() => onGuess(1)}
        className="w-full py-2 px-6 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium shadow"
      >
        Harmonia axyridis (Asian)
      </button>
    </div>
  );
}
