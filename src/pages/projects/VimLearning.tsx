import { Logos } from "@/components/Logos";
import { Technology } from "@/helpers/technologies";

export function VimLearning() {
  const technologies: Technology[] = [
    Technology.Vim,
    Technology.NeoVim,
  ];

  const logos = technologies.map((technology: Technology) => {
    return { name: technology, alt: `${technology} Logo` };
  });

  return (
    <div>
      <h1 className="text-2xl">
        <span className="font-bold">Vim Learning</span> -{" "}
        <span className="italic">2022 - Present</span>
      </h1>

      <div className="border-t border-gray-200 mb-3"></div>

      <Logos logos={logos} />
    </div>
  );
}

