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
      <div className="bg-white p-5 rounded-xl md:w-2/3 xl:w-1/2">
        <div>
          <BackButton />
          <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>

          <div className="p-10 bg-gray-100 rounded-xl my-5 text-lg">
            <div className="text-xl font-bold">Contents</div>
            <ul className="list-disc">
              <li>
                <a href="#hestia">Project Hestia</a>
              </li>

              <li>
                <a href="#ffbb">Fantasy Fantasy Basketball</a>
              </li>

              <li>
                <a href="#dissertation">University Dissertation</a>
              </li>

              <li>
                <a href="#ciphers">Ciphers</a>
              </li>

              <li>
                <a href="#vim">Vim Learning</a>
              </li>
            </ul>
          </div>

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
