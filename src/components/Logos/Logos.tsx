import Image from "next/image";

type Logo = {
  name: string;
  src: string;
  alt: string;
};

export function Logos() {
  const logos: Logo = [
    { name: "Typescript", src: "/ts.png", alt: "Typescript Logo" },
    { name: "React", src: "/react.png", alt: "React Logo" },
    { name: "Node", src: "/node.png", alt: "Node Logo" },
    { name: "Jest", src: "/jest.png", alt: "Jest Logo" },
    { name: "Git", src: "/git.png", alt: "Git Logo" },
    { name: "Linux", src: "/tux.png", alt: "Linux Tux" },
    { name: "SQL", src: "/sql.png", alt: "SQL Logo" },
    { name: "AWS", src: "/aws.png", alt: "AWS Logo" },
    { name: "PHP", src: "/php.png", alt: "PHP Logo" },
    { name: "Python", src: "/python.png", alt: "Python Logo" },
  ];

  return (
    <div className="flex flex-wrap">
      {logos.map((logo: Logo, index: number) => {
        return (
          <div
            key={`${logo.name}-${index}`}
            className="flex flex-row justify-center items-center bg-gray-200 rounded-2xl w-fit px-3 py-1 mr-2 mb-2"
          >
            <img src={logo.src} alt={logo.src} className="w-5 h-5 mr-1"></img>
            <div className="text-lg text-gray-600">{logo.name}</div>
          </div>
        );
      })}
    </div>
  );
}
