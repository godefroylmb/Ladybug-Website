import Image from "next/image";

type LadybugInfo = {
  imgPath: string;
  predicted: number;
  truth: number;
};

export default function Ladybug({ imgPath, predicted, truth}: LadybugInfo) {
  return (
    <div>
        
    </div>
  );
}
