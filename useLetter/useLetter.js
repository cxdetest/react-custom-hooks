import React, { useEffect, useState } from "react";

const useLetter = (txt) => {
  const [letter, setLetter] = useState([]);
  const [count, setCount] = useState(0);

  let res = Array.from(txt);

  useEffect(() => {
    setLetter([...letter, res[count]]);
    let timer = setTimeout(() => {
      setCount(count + 1);
    }, 100);
    if (count === txt.length) {
      clearTimeout(timer);
    }
  }, [count]);

  return [letter];
};

export default useLetter;
