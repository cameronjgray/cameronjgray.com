import { Logos } from "@/components/Logos";
import { jobs, Job } from "./jobs";
import { Technology } from "@/helpers/technologies";

export default function Jobs() {
  return (
    <div className="flex justify-center py-20 font-mono">
      <div className="bg-white p-5 rounded-xl w-1/2">
        <h1 className="text-3xl font-bold text-center mb-10">Jobs</h1>
        {jobs.map((job: Job) => {
          const technologies = job.company.technologies.map(
            (technology: Technology) => {
              return { name: technology, alt: `${technology} Logo` };
            }
          );

          return (
            <div className="pb-10">
              <h1 className="text-2xl">
                <span className="font-bold">{job.company.name}</span> -{" "}
                <span className="italic">{job.company.dates}</span>
              </h1>

              <h2 className="text-lg">
                {job.company.jobTitle}, {job.company.location}
              </h2>

              <div className="border-t border-gray-200 mb-3"></div>

              <Logos logos={technologies} />

              <div>{job.summary}</div>

              <h3 className="text-lg font-bold pt-3">Responsibilities</h3>
              {job.responsibilities.map(responsibility => <div>{responsibility}</div>)}

              <h3 className="text-lg font-bold pt-3">Achievements</h3>
              {job.achievements.map(achievement => <div>{achievement}</div>)}

            </div>
          );
        })}
      </div>
    </div>
  );
}
