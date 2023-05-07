import Image from "next/image";
import { Technology, getTechnologyLogo } from '@/helpers/technologies';

type Logo = {
  name: string;
  alt: string;
};

export function Logos() {
  const logos: Logo = [
    { name: Technology.Typescript, alt: "Typescript Logo" },
    { name: Technology.React, alt: "React Logo" },
    { name: Technology.Node, alt: "Node Logo" },
    { name: Technology.Jest, alt: "Jest Logo" },
    { name: Technology.Git, alt: "Git Logo" },
    { name: Technology.Linux, alt: "Linux Tux" },
    { name: Technology.SQL, alt: "SQL Logo" },
    { name: Technology.AWS, alt: "AWS Logo" },
    { name: Technology.PHP, alt: "PHP Logo" },
    { name: Technology.Python, alt: "Python Logo" },
  ];

  return (
    <div className="flex flex-wrap">
      {logos.map((logo: Logo, index: number) => {
        return (
          <div
            key={`${logo.name}-${index}`}
            className="flex flex-row justify-center items-center bg-gray-200 rounded-2xl w-fit px-3 py-1 mr-2 mb-2"
          >
            <img src={getTechnologyLogo(logo.name)} alt={logo.alt} className="w-5 h-5 mr-1"></img>
            <div className="text-lg text-gray-600">{logo.name}</div>
          </div>
        );
      })}
    </div>
  );
}
