import { Logos } from "@/components/Logos";
import { Technology } from "@/helpers/technologies";

export function FFBB() {
  const technologies: Technology[] = [
    Technology.Python,
    Technology.GoogleSheets,
  ];

  const logos = technologies.map((technology: Technology) => {
    return { name: technology, alt: `${technology} Logo` };
  });

  return (
    <div className="pb-3">
      <h1 className="text-2xl">
        <span className="font-bold">Fantasy Fantasy Basketball</span> -{" "}
        <span className="italic">2020</span>
      </h1>

      <div className="border-t border-gray-200 mb-3"></div>

      <Logos logos={logos} />
    </div>
  );
}

