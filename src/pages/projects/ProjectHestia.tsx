import { Logos } from "@/components/Logos";
import { Technology } from "@/helpers/technologies";

export default function ProjectHestia() {
  const technologies: Technology[] = [
    Technology.HTML,
    Technology.CSS,
    Technology.JS,
    Technology.Python,
  ];

  const logos = technologies.map((technology: Technology) => {
    return { name: technology, alt: `${technology} Logo` };
  });

  return (
    <div id="hestia" className="pb-3">
      <h1 className="text-2xl">
        <span className="font-bold">Project Hestia</span>
      </h1>

      <div className="border-t border-gray-200 mb-3"></div>

      <Logos logos={logos} />

      <div className="py-5">
        <p className="pb-3">Project Hestia started in 2018 and is my longest running project. Named after the Greek God Hestia, who is the deity of family and the hearth, it is a project centred around family photos. It started as me trying to group and backup all our family photos into one place and since then has grown arms and legs.</p>

        <p className="pb-3">The base of the project is a collection of sorted photos from our family. Currently I am sitting at about ~21,000 photos spanning from the 1960s to now. At first it was just getting all the photos off of old hard drives but a couple years ago I got a scanner and started to go through old photos in the attic and digitise them.</p>

        <p className="pb-3">Every day at 9am my family get sent a random photo from the collection as a picture of the day. This is done through a small Python script. It has been a fun way to remind us of photos that you would normally forget about. All the photos can also be accessed via a local website if you're connected to the wifi. Both the website and picture of the day program are hosted on Raspberry Pis. The website is just written in standard HTML/CSS/JS and then the API for getting the photos is written in Python. This project was my first introduction to working with servers and building a full stack app!</p>
      </div>
    </div>
  );
}
