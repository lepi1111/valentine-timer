import { useState } from "react";
import valentinesGif from "../gif/Valentines Day Love GIF by Bryson Williams.gif";

export default function Question() {
  const [noCount, setNoCount] = useState(0);
  const [yesClick, setYesClicked] = useState(false);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoText = () => {
    const phrasesArray = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    console.log(phrasesArray[Math.min(noCount, phrasesArray.length - 1)]);

    return phrasesArray[Math.min(noCount, phrasesArray.length - 1)];
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };
  return (
    <>
      <div className={`-mt-32 ${yesClick === true ? "hidden" : "visible"}`}>
        <img className="w-40 m-auto mb-10" src={valentinesGif} />
        <div className="text-7xl text-[#fdbdc2]">Will you be my Valentine?</div>
        <div className="mt-5 flex justify-center gap-10">
          <button
            className="hover:bg-green-500 hover:text-white outline-none border-0 w-24"
            onClick={handleYesClick}
          >
            YES
          </button>
          <button
            className="hover:bg-red-500 hover:text-white outline-none border-0 min-w-24"
            onClick={handleNoClick}
          >
            {noCount === 0 ? "No" : getNoText()}
          </button>
        </div>
      </div>
      <div
        className={`text-7xl text-[#fdbdc2] -mt-24 ${
          yesClick === true ? "visible" : "hidden"
        }`}
      >
        I Love You Pookie ❤️
      </div>
    </>
  );
}
