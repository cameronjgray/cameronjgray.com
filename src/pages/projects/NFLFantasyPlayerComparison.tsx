import { Logos } from "@/components/Logos";
import { Technology } from "@/helpers/technologies";

export default function NFLFantasyPlayerComparison() {
  const technologies: Technology[] = [
    Technology.Node,
    Technology.Docker,
    Technology.SQL,
    Technology.Bash,
  ];

  const logos = technologies.map((technology: Technology) => {
    return { name: technology, alt: `${technology} Logo` };
  });

  return (
    <div id="nfl" className="pb-3">
      <h1 className="text-2xl">
        <span className="font-bold">NFL Fantasy Player Comparison</span>
      </h1>

      <div className="border-t border-gray-200 mb-3"></div>

      <Logos logos={logos} />

      <div className="py-5">
        <p className="pb-3">Every year I play NFL Fantasy Football with my friends. I'm okay at it but I'm by no means an expert so this was a fun project to help me get a leg up on the competition. I decided to create a player classifer where I could compare players but the part that really interested me was trying to figure out a model I could use from different variables.</p>
        <p className="pb-3">I wanted to analyse the relationships between different values I could quantify about a player and how many fantasy points they might get me in the upcoming season. I used some simple variables such as height, weight and age as well as some more complicated ones like how good the teams that said player would be facing in the season or the overall classification of the team that they are on.</p>
        <p className="pb-3">The maths gets a bit complicated and messy but the eventual way a grading of a player was calculated was a weighted average. To find out the best weights to use I setup part of the project to run simulations based off of a previous season. Below is my first run:</p>
        <img src="/firstrun.webp" className="px-5" alt="First Run Graph" />
        <p className="pb-3">The "Madden" value is the player's overall rating on the video game Madden and I used that as a starting value of how good the player is. Strength of schedule is how good the teams that the player will be facing; Team Position is how good that the players on the team which can help out are (for example a Running Back needs a good Offensive Line); Opposition is like strength of schedule but it is the specific players that the play will be lining up agains (Wide Recievers vs the Secondary). The higher the dot the more weight it has in the model and the further left it is the better the score of the model. This means that dots in the top left are the factors that best predict how well a player is going to do. As you can see in this model the Madden rating is definitely the most important.</p>
        <p className="pb-3">Below is a variation with age, height, weight and experience. You can see here that experience takes the place that the Madden rating did in the first model and is the most important value.</p>
        <img src="/ageheightweightexp.webp" className="px-5" alt="Age, height and weight run" />
        <p className="pb-3">Next we have a model with height, weight and Madden rating. Once again Madden rating is the clear decider but interesting height seems slightly more important than weight. Perhaps because taller Wide Recievers have a better reach for catching the ball?</p>
        <img src="/heightweightrating.webp" className="px-5" alt="Height, weight and rating run" />
        <p className="pb-3">Lastly, below we have every metric bar Madden rating and team Strength of Schedule. It's mainly just noise with experience coming out on top. However the overall model is pretty poor with the score being much worse than the others.</p>
        <img src="/everythingbarrating.webp" className="px-5" alt="Everything bar rating run" />
        <p className="pb-3">So what did I learn? The conclusion was that Madden rating was far and away the most significant variable. This is probably because the team at EA have put a lot more work into classifying the players than my project! If you want you can try out the classifier you can find the Github link <a href="https://github.com/cameronjgray/player-comparison" target="_blank">here</a> but for fantasy football it's best just to trust the experts and hope you have good luck.</p>
      </div>
    </div>
  );
}
