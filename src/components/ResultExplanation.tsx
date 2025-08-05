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
        <p className="text-sm text-gray-700 leading-relaxed text-justify max-w-md">
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
