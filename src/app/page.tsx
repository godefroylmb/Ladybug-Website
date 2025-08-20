import fs from "fs/promises";
import path from "path";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Quiz from "../components/Quiz";

type DataEntry = {
  imgPath: string;
  predicted: number;
  truth: number;
};

async function fetchData(): Promise<DataEntry[]> {
  const predictionsPath = path.join(process.cwd(), "public/data/predicted_labels.csv");
  const truthsPath = path.join(process.cwd(), "public/data/test_labels.csv");

  const [predictionsText, truthsText] = await Promise.all([
    fs.readFile(predictionsPath, "utf-8"),
    fs.readFile(truthsPath, "utf-8"),
  ]);

  const predictionsLines = predictionsText.trim().split("\n").slice(1); // Skip header
  const truthsLines = truthsText.trim().split("\n").slice(1);

  const truthMap: Record<string, number> = {};
  truthsLines.forEach((line) => {
    const [imageId, label] = line.split(",");
    truthMap[imageId] = Number(label);
  });

  return predictionsLines.map((line) => {
    const [imageId, predicted] = line.split(",");
    const truth = truthMap[imageId];
    return {
      imgPath: `/ladybugs/${imageId}_im.png`,
      predicted: Number(predicted),
      truth,
    };
  });
}

export default async function Home() {
  const data = await fetchData();

  const quizData = data.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-12">
      <Header />

      <main className="flex flex-col items-center gap-4">
        <Quiz data={quizData} />
      </main>

      <Footer />
    </div>
  );
}
