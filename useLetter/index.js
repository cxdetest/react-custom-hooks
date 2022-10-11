import useLetter from "./useLetter";

const componentName = () => {
  let txt = "hello world";
  const [res] = useLetter(txt);
  //const [returns an array] = useLetter(text input)

  return <div>{res.join("")}</div>;
};
