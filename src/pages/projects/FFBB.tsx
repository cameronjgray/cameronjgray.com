import { Logos } from "@/components/Logos";
import { Technology } from "@/helpers/technologies";

export function FFBB() {
  const technologies: Technology[] = [
    Technology.Python,
    Technology.GoogleSheets,
  ];

  const logos = technologies.map((technology: Technology) => {
    return { name: technology, alt: `${technology} Logo` };
  });

  return (
    <div className="pb-3">
      <h1 className="text-2xl">
        <span className="font-bold">Fantasy Fantasy Basketball</span> -{" "}
        <span className="italic">2020</span>
      </h1>

      <div className="border-t border-gray-200 mb-3"></div>

      <Logos logos={logos} />

      <div className="py-5">
        <p className="pb-3">Fantasy Fantasy Basketball was a project I did for my friends during lockdown. As there was no sport on it also meant no fantasy sport. Enter FFBB! The project had 2 iterations. The first was a test over a few days to see if it was fun or not and the second was over 10 days.</p>

        <p className="pb-3">Using a database of players based off of the rating system of the 2k games each day I would generate the games for the day based off a schedule I made. This was done using a straightforward Python script. I would then enter these scores into the controlling spreadsheet and the players would get points based off of how well the virtual basketball players did in their generated games just like fantasy basketball.</p>

        <p className="pb-3">The frontend part of the project was done in Google Sheets as it was something easy for everyone to access...it did cause multiple headaches though! After a draft to pick your team (a player could only exist on one fantasy team and the owner had to stay within budget) I ran the simulation each day and then updated the sheets. I would then do a short news report in our group chat.</p>

        <p className="pb-3">The way the spreadsheets worked was a database sheet that contained all the games, a control sheet which compiled the data and then each player had their own indivdual sheet to control their team. The individual sheets also had information about the league and current standings. The data was passed around the sheets using the import range function.</p>

        <p className="pb-3">Below are some screenshots from the spreadsheets to give you an idea of what it was like:</p>

        <img src="/ffbb-screenshots.webp" alt="FFBB Screenshots" className="w-full px-5" />
      </div>
    </div>
  );
}

