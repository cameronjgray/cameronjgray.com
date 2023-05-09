import { Logos } from "@/components/Logos";
import { Technology } from "@/helpers/technologies";

export function Ciphers() {
  const technologies: Technology[] = [
    Technology.Node,
  ];

  const logos = technologies.map((technology: Technology) => {
    return { name: technology, alt: `${technology} Logo` };
  });

  return (
    <div id="ciphers" className="pb-3">
      <h1 className="text-2xl">
        <span className="font-bold">Ciphers</span> -{" "}
        <span className="italic">2023</span>
      </h1>

      <div className="border-t border-gray-200 mb-3"></div>

      <Logos logos={logos} />

      <div className="py-5">
        <p className="pb-3">This project is a personal interest project to build different ciphers in Node. I remember learning about them at university but not actually getting to implement them so this was a chance to do that. The other part of this project was to try build a virtual Enigma machine like the ones that Alan Turing was trying to crack in WW2. You can find much more about this project (and can try it out) on <a className="underline" href="https://github.com/cameronjgray/ciphers">Github</a>.</p></div>
    </div>
  );
}

