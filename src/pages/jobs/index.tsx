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
        link: string;
    };
    summary: string[];
    responsibilities?: string[];
    achievements?: string[];
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
        link: 'https://incentivegames.com/',
    },
    summary: [ 'Incentive Games is a creator of free to play sports and casino games that the lease out to other businesses to use on their platforms. I joined the company as a graduate and watched it grow from 5-10 people to 30. I got to start my career and begin to hone my development skills with exposure to the full stack.' ],
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
        link: 'https://procuros.io/',
    },
    summary: [ 'Procuros Gmbh is a German startup with the goal of automating B2B transactions. I joined the company very early on and given a lot of responsibility for different projects. As the company grew my role changed and evolved. It went from lots of smaller projects to one large project which was the company portal and a key product for the company\'s investment.' ],

    responsibilities: [
        '- Primary developer for the development and maintenance of the customer portal where the client could view and create transactions, see connections and manage their account. I was part of lots of decisions around the portal including how the frontend repository would be structured, the design of the portal and the REST API that it would make calls to.',
        '- Maintenance of the email connector software for generating order responses, shipping notices and invoices. This also included creation and maintenance of the calculator to calculate all the discounts and charges associated with an invoice.',
        '- Creation and maintenance of the Google Sheets connector. A piece of software that used Google App Script so that a user could place an order in our system using a Google Sheet',
        '- Involvement in the hiring of new developers to the company',
    ],
    achievements: [
        '- Promotion from junior to mid level developer',
        '- Main player in the project to completely rebuild the customer portal. I handled the majority of the frontend rebuild in this process as well as being part of all the decisions related to the new code base structure',
        '- Built the software to create orders, shipping notices and invoices via email magic links. This also involved a sub project for tax and modifications on the created invoices which was entirely my responsibility',
        '- Continuous increase in responsibility of projects of different scopes',
    ],
}

const pps: Job = {
    company: {
        name: 'Plastic Pipe Shop',
        dates: 'June 2023 - September 2023',
        jobTitle: 'Freelance',
        location: 'UK (Remote)',
        technologies: [
            Technology.Node,
            Technology.Jest,
            Technology.AWS,
            Technology.CDK,
            Technology.Docker,
            Technology.Bash,
        ],
        link: 'https://www.plasticpipeshop.co.uk/',
    },
    summary: [ 'Hired as a freelancer to build software to automatically generate a Specification Sheet in PDF format for different products. There were multiple different versions of the PDF to generate depending on both user and product requirements. The project was built using the PDF Kit library and was deployed to AWS using CDK. Bash was used for writing test scripts but also for building the project for deployment too.',

    'The project was optimised to save costs on AWS. It used a Lambda to run the software so that it scaled automatically and the database used for the files was an S3 Bucket. This was for cheaper than using some kind of SQL DB. For the dev setup everything was run within Docker containers with extra containers for running tests and for emulating the Lambda.',

    'I was the only developer on the project so had full responsibility for the entire job. I had to do a lot of research and learning in order to produce a service that would be useful to the company. I also had a chance to optimise my own workflows by making more use of technologies like Bash. As I had to do everything myself unlike my last two jobs my skills as a developer came on leaps and bounds.'
    ],
}

const vault: Job = {
    company: {
        name: 'Vault',
        dates: 'October 2023 - Present',
        jobTitle: 'Full Stack Developer',
        location: 'UK (Remote)',
        technologies: [
            Technology.Node,
            Technology.Typescript,
            Technology.Jest,
            Technology.SQL,
            Technology.AWS,
            Technology.Docker,
            Technology.Bash,
            Technology.GraphQL,
            Technology.Sequelize,
        ],
        link: 'https://vaultplatform.com/',
    },
    summary: [
        'Vault Platform is a startup which is trying to tackle workplace misconduct. It is made up of a management portal and different intake methods for users to report and ask questions.',
        'Vault is where my skills outside of programming grew substantially. I started to take on more responsibility in leading different projects. These started small but grew in size as the company recognised my ability to effectively lead and deliver. Leading also meant communicating well with members of the team, design, product and wider stakeholders. I became an integral part of the team that could be relied upon by people throughout the company.'
    ],
    achievements: [
        '- Tech lead on projects such as CSV exporting, file uploads and virus scanning',
        '- Co tech lead on major project to integrate the platform with 3rd party messaging services, such as Slack, to create a new user intake method and research how to add AI to the project for a chatbot feature',
        '- Promotion from the internal IC3 level to IC4',
        '- Consistent positive feedback on my work from line managers and the wider team which was then rewarded with leading more projects and more responsibilities',
    ],
    responsibilities: [
        '- Maintaining and adding to the management portal and the different user intake methods. These intake methods included web apps, automated phone lines and a mobile app',
        '- Full management and leading of projects including responsibilities such as designing an effective solution, writing tickets for other devs, working with PM and design, implementation and feeding back to wider stakeholders',
        '- Releasing the different products to production including releasing to both the App store and the Google Play store',
        '- Continued maintenance and delivery of projects for future iterations and making sure that it was up to the client\'s standards',
        '- Iterating and improving the codebase on new projects while still making sure that legacy customer data still fuctioned correctly',
        '- Adhering to the companies stricts data handling and security policies when implementing any feature'
    ],
}

const jobs: Job[] = [vault, pps, procuros, incentiveGames];

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
                <span className="font-bold"><a href={job.company.link}>{job.company.name}</a></span> -{" "}
                <span className="italic">{job.company.dates}</span>
              </h1>

              <h2 className="text-lg">
                {job.company.jobTitle}, {job.company.location}
              </h2>

              <div className="border-t border-gray-200 mb-3"></div>

              <Logos logos={technologies} />

              {job.summary.map((summaryParagraph, i) => {
                return (
                    <div className="pt-3" key={`summary-${i}`}>{summaryParagraph}</div>
                )
              })}

              {job.responsibilities && <h3 className="text-lg font-bold pt-3">Responsibilities</h3> }
              {job.responsibilities?.map((responsibility, i) => (
                <div className="pb-3" key={`responsibility-${i}`}>{responsibility}</div>
              ))}

              {job.responsibilities && <h3 className="text-lg font-bold pt-3">Achievements</h3> }
              {job.achievements?.map((achievement, i) => (
                <div className="pb-3" key={`achievement-${i}`}>{achievement}</div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
