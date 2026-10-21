import { useEffect, useState } from "react";
import { useMediaQuery } from "./useMediaQuery";

// Types and deletes each word in turn. `words` must be a stable array.
export const useTypewriter = (words, { typeMs = 70, deleteMs = 35, holdMs = 1400 } = {}) => {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (reduced) {
      setText(words[0]);
      return;
    }

    let wordIndex = 0;
    let length = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      length += deleting ? -1 : 1;
      setText(word.slice(0, length));

      let delay = deleting ? deleteMs : typeMs;
      if (!deleting && length === word.length) {
        deleting = true;
        delay = holdMs;
      } else if (deleting && length === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    setText("");
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [words, reduced, typeMs, deleteMs, holdMs]);

  return text;
};
