import { Logos } from "@/components/Logos";
import { Technology } from "@/helpers/technologies";
import { BackButton } from "@/components/BackButton/BackButton";
import { ProjectHestia } from "./ProjectHestia";
import { FFBB } from "./FFBB";
import { UniversityDissertation } from "./UniversityDissertation";
import { Ciphers } from "./Ciphers";
import { VimLearning } from "./VimLearning";

export default function Projects() {
  return (
    <div className="flex justify-center py-20 font-mono">
      <div className="bg-white p-5 rounded-xl w-1/2">
        <div>
          <BackButton />
          <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>
            
          <ProjectHestia />
          <FFBB />
          <UniversityDissertation />
          <Ciphers />
          <VimLearning />
        </div>
      </div>
    </div>
  );
}
