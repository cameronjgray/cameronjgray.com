import { Logos } from "@/components/Logos";
import { ProfileImage } from "@/components/ProfileImage";
import { Technology } from "@/helpers/technologies";

export default function Home() {
  const logos = [
    { name: Technology.Typescript, alt: "Typescript Logo" },
    { name: Technology.React, alt: "React Logo" },
    { name: Technology.Node, alt: "Node Logo" },
    { name: Technology.Jest, alt: "Jest Logo" },
    { name: Technology.Tailwind, alt: "Tailwind Logo" },
    { name: Technology.Git, alt: "Git Logo" },
    { name: Technology.Linux, alt: "Linux Tux" },
    { name: Technology.SQL, alt: "SQL Logo" },
    { name: Technology.AWS, alt: "AWS Logo" },
    { name: Technology.Docker, alt: "Docker Logo" },
    { name: Technology.Python, alt: "Python Logo" },
    { name: Technology.Neovim, alt: "Neovim Logo" },
  ];

  return (
    <div className="w-screen h-screen flex justify-center items-center font-mono my-10 sm:my-0">
      <div className="hidden md:block bg-white p-5 rounded-xl md:w-4/5 lg:w-2/3 xl:w-1/2">
        <div className="flex flex-row justify-start">
          <div className="p-5 border border-gray-200 rounded-xl mr-10">
            <ProfileImage />
          </div>

          <div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <div>
                  <div className="text-2xl 2xl:text-5xl">Cameron Gray</div>
                  <div className="text-lg 2xl:text-2xl text-gray-500">
                    Full Stack Developer
                  </div>
                </div>

                <div className="border-t border-gray-200 mb-4 2xl:mb-8 mt-1"></div>

                <div>
                  <Logos logos={logos} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href="/jobs"
                  className="border border-gray-200 text-center text-md 2xl:text-xl hover:shadow-lg rounded-md p-3 cursor-pointer"
                >
                  Jobs
                </a>
                <a
                  href="/projects"
                  className="border border-gray-200 text-center text-md 2xl:text-xl hover:shadow-lg rounded-md p-3 cursor-pointer"
                >
                  Projects
                </a>
                <a href="/CV.pdf">
                  <div className="border border-gray-200 text-center text-md 2xl:text-xl hover:shadow-lg rounded-md p-3 cursor-pointer">
                    CV
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden bg-white p-5 rounded-xl w-full mx-2">
        <div className="flex flex-col justify-start">
          <div className="mb-5 p-5 border border-gray-200 rounded-xl">
            <ProfileImage />

            <div>
              <div className="text-center text-2xl">Cameron Gray</div>
              <div className="text-center text-lg">Full Stack Developer</div>
            </div>

            <div className="border-t border-gray-200 my-5"></div>

            <Logos logos={logos} />
          </div>

          <div>
            <div className="grid grid-cols-3 gap-3">
              <a
                href="/jobs"
                className="border border-gray-200 text-center text-sm hover:shadow-lg rounded-md p-3 cursor-pointer"
              >
                Jobs
              </a>
              <a
                href="/projects"
                className="border border-gray-200 text-center text-sm hover:shadow-lg rounded-md p-3 cursor-pointer"
              >
                Projects
              </a>
              <a href="/CV.pdf">
                <div className="border border-gray-200 text-center text-sm hover:shadow-lg rounded-md p-3 cursor-pointer">
                  CV
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
