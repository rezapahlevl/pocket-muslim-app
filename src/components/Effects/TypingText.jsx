import { useEffect } from "react";
import { useState } from "react";

const TypingText = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);

      index += 1;

      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <>
      <span className="text-3xl">{displayText}</span>
    </>
  );
};

export default TypingText;
