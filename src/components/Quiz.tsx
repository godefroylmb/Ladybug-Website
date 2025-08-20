"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ClassificationButtons from "@/components/ClassificationButtons";
import ResultExplanation from "@/components/ResultExplanation";

type DataEntry = {
  imgPath: string;
  predicted: number;
  truth: number;
};

type Props = {
  data: DataEntry[];
};

export default function Quiz({ data }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleGuess = (guess: number) => {
    if (guess === data[currentIndex].truth) setScore(score + 1);
    setCurrentIndex(currentIndex + 1);
  };

  // Quiz terminé
  if (currentIndex >= data.length) {
    const modelCorrectCount = data.filter(e => e.predicted === e.truth).length;
    return (
      <ResultExplanation
        score={score}
        total={data.length}
        modelCorrectCount={modelCorrectCount}
      />
    );
  }

  const currentEntry = data[currentIndex];

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto">
      <p className="font-semibold text-gray-600">
        Question {currentIndex + 1}/{data.length}
      </p>

      <div className="w-full h-64 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={currentEntry.imgPath}
            alt="Ladybug"
            className="absolute top-0 left-0 w-full h-full object-contain"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      <ClassificationButtons
        predicted={currentEntry.predicted}
        truth={currentEntry.truth}
        onGuess={handleGuess}
      />
    </div>
  );
}
