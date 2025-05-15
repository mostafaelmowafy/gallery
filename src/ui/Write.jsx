import { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Split text into lines
  const lines = text.split("\n");

  useEffect(() => {
    if (currentLine < lines.length) {
      if (currentIndex <= lines[currentLine].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => {
            const newLines = [...prev];
            newLines[currentLine] = lines[currentLine].substring(
              0,
              currentIndex
            );
            return newLines;
          });
          setCurrentIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        // Move to next line after a pause
        const lineChangeTimeout = setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
          setCurrentIndex(0);
          setDisplayedText((prev) => [...prev, ""]);
        }, 500); // Pause between lines

        return () => clearTimeout(lineChangeTimeout);
      }
    }
  }, [currentIndex, currentLine, lines, speed]);

  return (
    <div className="text-white text-xl font-semibold mt-10 text-center">
      {displayedText.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
};

export default Typewriter;
