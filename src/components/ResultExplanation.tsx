type Props = {
  score: number;
  total: number;
  modelCorrectCount: number;
};

export default function ResultExplanation({ score, total, modelCorrectCount }: Props) {
  const getMessage = () => {
    if (score === total && modelCorrectCount === total) {
      return "🎉 Both you and the model got everything right! Amazing!";
    } else if (score === total && modelCorrectCount !== total) {
      return "👏 You outperformed the model!";
    } else if (score !== total && modelCorrectCount === total) {
      return "😬 The model outperformed you this time!";
    } else {
      return "🤷 Both you and the model made some mistakes.";
    }
  };

  return (
    <div className="max-w-xl text-center mt-4 space-y-4 mx-auto">
      <h2 className="text-2xl font-bold">Quiz Completed!</h2>
      <p className="text-lg font-semibold">{getMessage()}</p>
      <p className="text-lg">🎯 Your score: {score}/{total}</p>
      <p className="text-sm text-gray-700 leading-relaxed text-justify max-w-md mx-auto">
        🧠 How to Tell Them Apart:<br />
        The European ladybug typically has a bright red shell with exactly seven black spots, and often features two small white dots behind its head.<br />
        The Asian ladybug shows much more variability — it may have a dark shell with light spots, or a light shell covered in many dark spots.<br />
        I built a custom feature extractor and trained a Decision Tree model, achieving 94% accuracy in telling them apart.
      </p>
      <a
        href="https://github.com/godefroylmb/Ladybug"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        View on GitHub
      </a>
    </div>
  );
}
