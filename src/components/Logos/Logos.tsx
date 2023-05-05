import Image from "next/image";

type Logo = {
  name: string;
  src: string;
  alt: string;
};

export function Logos() {
  const logos: Logo = [
    { name: "Typescript", src: "/ts.webp", alt: "Typescript Logo" },
    { name: "React", src: "/react.webp", alt: "React Logo" },
    { name: "Node", src: "/node.webp", alt: "Node Logo" },
    { name: "Jest", src: "/jest.webp", alt: "Jest Logo" },
    { name: "Git", src: "/git.webp", alt: "Git Logo" },
    { name: "Linux", src: "/tux.webp", alt: "Linux Tux" },
    { name: "SQL", src: "/sql.webp", alt: "SQL Logo" },
    { name: "AWS", src: "/aws.webp", alt: "AWS Logo" },
    { name: "PHP", src: "/php.webp", alt: "PHP Logo" },
    { name: "Python", src: "/python.webp", alt: "Python Logo" },
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
