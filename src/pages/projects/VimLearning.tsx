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
    <div className="pb-3">
      <h1 className="text-2xl">
        <span className="font-bold">Vim Learning</span> -{" "}
        <span className="italic">2022 - Present</span>
      </h1>

      <div className="border-t border-gray-200 mb-3"></div>

      <Logos logos={logos} />

      <div className="py-5">
        <p>Over the years I'd come in contact with Vim a couple times and always been too intimidated to give it a shot. Then I came across <a className="underline" href="https://vim-adventures.com/">Vim Adventures</a> which gets you used to Vim motions through a fun puzzle game. Each level introduces new concepts and the only way to complete the game is to take them on board.</p>

        <p className="pt-3">After playing through the game a couple times I started to use Vim on occasion to do small tasks. I also installed a Vim extension into VS Code to help me practice the motions. I eventually came across NeoVim and after watching some guides on YouTube I started to build my own setup. You can see the current version on <a className="underline" href="https://github.com/cameronjgray/nvim">Github</a>.</p>

        <p className="pt-3">I'm now using NeoVim as my editor of choice but the learning is not over. There's always new commands to learn and new ways of doing things. And that's what I love about it all!</p>
      </div>
    </div>
  );
}

