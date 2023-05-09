import { Logos } from "@/components/Logos";
import { Technology } from "@/helpers/technologies";
import { BackButton } from "@/components/BackButton/BackButton";

export type Job = {
    company: {
        name: string;
        dates: string;
        jobTitle: string;
        location: string;
        technologies: Technology[];
    };
    summary: string;
    responsibilities: string[];
    achievements: string[];
}

const incentiveGames: Job = {
    company: {
        name: 'Incentive Games',
        dates: 'May 2020 - December 2021',
        jobTitle: 'Full Stack Developer',
        location: 'UK (Remote)',
        technologies: [
            Technology.React,
            Technology.Typescript,
            Technology.Jest,
            Technology.Node,
            Technology.SQL,
            Technology.AWS,
        ],
    },
    summary: 'Incentive Games is a creator of free to play sports and casino games that the lease out to other businesses to use on their platforms. I joined the company as a graduate and watched it grow from 5-10 people to 30. I got to start my career and begin to hone my development skills with exposure to the full stack.',
    responsibilities: [
        '- Development and maintenance of multiple different kinds of games in the company\'s game suite',
        '- Development and maintenance of the full stack of the project to create the the user permission groups in the company\'s admin client',
        '- Creating a script using historical data to check how different scoring matrices would effect our fantasy sport games',
        '- Monitoring and updating of the security flags and security status of the different games',
        '- Being one of the developers that had been there the longest meant I had more responsibility when it came to the older games in the suit',
    ],
    achievements: [
        '- Promotion from graduate to junior developer',
        '- Learning and using a lot of new technologies that come with working in a professional development environment, delivering games to a tight deadline',
        '- Taking ownership of the security of the games after pen tests and implementing fixes across the game suite',
        '- Entire ownership of project to build and maintain user management feature for the company’s admin client',
        '- My progress and commitment being recognised meaning I was given more and more responsibility',
    ],
}

const procuros: Job = {
    company: {
        name: 'Procuros Gmbh',
        dates: 'January 2022 - May 2023',
        jobTitle: 'Full Stack Developer',
        location: 'Germany (Remote)',
        technologies: [
            Technology.React,
            Technology.Typescript,
            Technology.Jest,
            Technology.PHP,
            Technology.Laravel,
            Technology.PHPUnit,
            Technology.Docker,
            Technology.AWS,
            Technology.GoogleAppScript,
        ],
    },
    summary: 'Procuros Gmbh is a German startup with the goal of automating B2B transactions. I joined the company very early on and given a lot of responsibility for different projects. As the company grew my role changed and evolved. It went from lots of smaller projects to one large project which was the company portal and a key product for the company\'s investment.',
        
    responsibilities: [
        '- Primary developer for the development and maintenance of the customer portal where the client could view and create transactions, see connections and manage their account. I was part of lots of decisions around the portal including how the frontend repository would be structured, the design of the portal and the REST API that it would make calls to.',
        '- Maintenance of the email connector software for generating order responses, shipping notices and invoices. This also included creation and maintenance of the calculator to calculate all the discounts and charges associated with an invoice.',
        '- Creation and maintenance of the Google Sheets connector. A piece of software that used Google App Script so that a user could place an order in our system using a Google Sheet.',
        '- Involvement in the hiring of new developers to the company',
    ],
    achievements: [
        '- Promotion from junior to mid level developer',
        '- Main player in the project to completely rebuild the customer portal. I handled the majority of the frontend rebuild in this process as well as being part of all the decisions related to the new code base structure.',
        '- Built the software to create orders, shipping notices and invoices via email magic links. This also involved a sub project for tax and modifications on the created invoices which was entirely my responsibility.',
        '- Continuous increase in responsibility of projects of different scopes',
    ],
}

const jobs: Job[] = [procuros, incentiveGames];

export default function Jobs() {
  return (
    <div className="flex justify-center py-20 font-mono">
      <div className="bg-white p-5 rounded-xl md:w-2/3 xl:w-1/2">
        <div>
          <BackButton />

          <h1 className="text-3xl font-bold text-center mb-10">Jobs</h1>
        </div>

        {jobs.map((job: Job) => {
          const technologies = job.company.technologies.map(
            (technology: Technology) => {
              return { name: technology, alt: `${technology} Logo` };
            }
          );

          return (
            <div key={job.company.name} className="pb-10">
              <h1 className="text-2xl">
                <span className="font-bold">{job.company.name}</span> -{" "}
                <span className="italic">{job.company.dates}</span>
              </h1>

              <h2 className="text-lg">
                {job.company.jobTitle}, {job.company.location}
              </h2>

              <div className="border-t border-gray-200 mb-3"></div>

              <Logos logos={technologies} />

              <div className="pt-3">{job.summary}</div>

              <h3 className="text-lg font-bold pt-3">Responsibilities</h3>
              {job.responsibilities.map((responsibility) => (
                <div className="pb-3">{responsibility}</div>
              ))}

              <h3 className="text-lg font-bold pt-3">Achievements</h3>
              {job.achievements.map((achievement) => (
                <div className="pb-3">{achievement}</div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
