import Image from "next/image";

type LadybugProps = {
  imgPath: string;
};

export default function Ladybug({ imgPath }: LadybugProps) {
  return (
    <Image
      src={imgPath}
      alt="Ladybug"
      width={300}
      height={300}
      className="rounded-xl shadow-md "
    />
  );
}
