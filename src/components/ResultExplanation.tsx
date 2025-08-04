type Props = {
  userGuess: number;
  predicted: number;
  truth: number;
};

export default function ResultExplanation({ userGuess, predicted, truth }: Props) {
  const getMessage = () => {
    const correct = userGuess === truth;
    const modelCorrect = predicted === truth;

    if (correct && modelCorrect) {
      return "🎉 Both you and the model got it right! Great job!";
    } else if (correct && !modelCorrect) {
      return "👏 You're better than the model this time!";
    } else if (!correct && modelCorrect) {
      return "😬 The model outperformed you this time!";
    } else {
      return "🤷 Both you and the model got it wrong. Tough one!";
    }
  };

  return (
    <div className="max-w-xl text-center mt-4 space-y-4">
      <p className="text-lg font-semibold">{getMessage()}</p>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Asian ladybugs often have more spots and a darker "M"-shaped mark behind the head, 
        while European ones are usually redder with fewer, rounder spots. 
        I built a custom feature extractor and used a Decision Tree, reaching 94% accuracy.
      </p>
      <a
        href="https://github.com/your-repo"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        View on GitHub
      </a>
    </div>
  );
}
