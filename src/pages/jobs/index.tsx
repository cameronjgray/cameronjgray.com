import Image from "next/image";
import { Logos } from "@/components/Logos";
import { ProfileImage } from "@/components/ProfileImage";
import { jobs, Job } from "./jobs.ts";
import { Technology } from "@/helpers/technologies";

export default function Jobs() {
  return (
    <div className="flex justify-center py-20 font-mono">
      <div className="bg-white p-5 rounded-xl w-1/2">
        {jobs.map((job: Job) => {
          const technologies = job.company.technologies.map(
            (technology: Technology) => {
              return { name: technology, alt: `${technology} Logo` };
            }
          );

          return (
            <div>
              <h1 className="text-2xl">
                {job.company.name} - {job.dates}
              </h1>
              <h2 className="text-lg">
                {job.company.jobTitle}, {job.company.location}
              </h2>
              <div className="border-t border-gray-200 mb-3"></div>
              <Logos logos={technologies} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
