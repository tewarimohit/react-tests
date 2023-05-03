import React, { useState } from "react";

const Greetings = () => {
  const [changeText, setChangeText] = useState(false);

  const textChangeHandler = () => {
    setChangeText(!changeText);
  };
  return (
    <>
      <h1>Welcome to homepage</h1>
      {!changeText && <p>Here is the React App</p>}
      {changeText && <p>Text Changed</p>}
      <button onClick={textChangeHandler}>Change</button>
    </>
  );
};

export default Greetings;
