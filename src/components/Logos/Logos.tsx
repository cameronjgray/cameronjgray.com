import Image from "next/image";

interface Props {
    images: string[];
}

export function Logos({ images }: Props) {
  return (
    <div className="flex flex-col justify-around items-center p-10">
      <div className="flex w-full justify-between">
        <img src={images[0]} alt="tech logo" className="w-20 h-20"></img>
        <img src={images[1]} alt="tech logo" className="w-20 h-20"></img>
      </div>

      <div className="w-full flex justify-center">
        <img src={images[2]} alt="tech logo" className="w-20 h-20"></img>
      </div>

      <div className="flex w-full justify-between">
        <img src={images[3]} alt="tech logo" className="w-20 h-20"></img>
        <img src={images[4]} alt="tech logo" className="w-20 h-20"></img>
      </div>
    </div>
  );
}
