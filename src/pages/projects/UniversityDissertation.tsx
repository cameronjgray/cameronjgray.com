import { Logos } from "@/components/Logos";
import { Technology } from "@/helpers/technologies";

export function UniversityDissertation() {
  const technologies: Technology[] = [
    Technology.Python,
    Technology.TensorFlow,
    Technology.PHP,
  ];

  const logos = technologies.map((technology: Technology) => {
    return { name: technology, alt: `${technology} Logo` };
  });

  return (
    <div className="pb-3">
      <h1 className="text-2xl">
        <span className="font-bold">University Dissertation</span> -{" "}
        <span className="italic">2018 - 2019</span>
      </h1>

      <div className="border-t border-gray-200 mb-3"></div>

      <Logos logos={logos} />

      <div className="py-5">
        <p className="pb-3">My final year project at university was <i>"Using Machine Learning to Identify Doctored Images"</i>. The goal of the project was to produce software that could identify if an image had been tampered with. The secondary part of the project was to make the technology more accessible to people by make it available to use on a website.</p>

        <p className="pb-3">I wrote the code to do the detection in Python, making use of TensorFlow for the machine learning part. Then for the website portion I used PHP. You can see the full dissertation <a href="">here</a>.</p>
      </div>
    </div>
  );
}

