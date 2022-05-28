import React from "react";

const MouseContext = React.createContext({
  isMouseDown: false,
  word: "",
  onMouseDownHandler(word) {},
  alreadyEntered: [],
  score: 0,
});

export default MouseContext;
