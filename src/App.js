// styling
import "./App.css";
import { TextArea, Button } from "./styles";
import { ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import React from "react";

function App() {
  const [boldText, setBoldText] = useState(false);
  const [italicText, setItalicText] = useState(false);
  const [ulText, setUlText] = useState(false);

  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [color4, setColor4] = useState(false);
  const [color5, setColor5] = useState(false);

  const handleColor1 = () => {
    setColor1(true);
    setColor2(false);
    setColor3(false);
    setColor4(false);
    setColor5(false);
  };

  const handleColor2 = () => {
    setColor1(false);
    setColor2(true);
    setColor3(false);
    setColor4(false);
    setColor5(false);
  };
  const handleColor3 = () => {
    setColor1(false);
    setColor2(false);
    setColor3(true);
    setColor4(false);
    setColor5(false);
  };
  const handleColor4 = () => {
    setColor1(false);
    setColor2(false);
    setColor3(false);
    setColor4(true);
    setColor5(false);
  };
  const handleColor5 = () => {
    setColor1(false);
    setColor2(false);
    setColor3(false);
    setColor4(false);
    setColor5(true);
  };

  const theme = {
    b: boldText ? "bold" : "",
    i: italicText ? "italic" : "",
    ul: ulText ? "underline" : "",
  };

  console.log(theme);

  const colorTheme = {
    yellow: color1 ? "yellow" : "",
    blue: color2 ? "blue" : "",
    red: color3 ? "red" : "",
    black: color4 ? "black" : "",
    purple: color5 ? "purple" : "",
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="cont">
        <div className="butt-cont">
          <Button
            className="btn glow-on-hover"
            onClick={() => (boldText ? setBoldText(false) : setBoldText(true))}
          >
            <b> Bold</b>
          </Button>

          <Button
            className="btn glow-on-hover"
            onClick={() =>
              italicText ? setItalicText(false) : setItalicText(true)
            }
          >
            <i> Italic</i>
          </Button>

          <Button
            className="btn glow-on-hover"
            onClick={() => (ulText ? setUlText(false) : setUlText(true))}
          >
            <u>Underlined</u>
          </Button>
        </div>
        <TextArea
          placeholder="enter your text here ..."
          rows="10"
          cols="80"
          fontWeight={theme.b}
          fontStyle={theme.i}
          ul={theme.ul}
          c1={colorTheme.yellow}
          c2={colorTheme.blue}
          c3={colorTheme.red}
          c4={colorTheme.black}
          c5={colorTheme.purple}
        />

        <button
          type="button"
          onClick={handleColor1}
          className="btn btn-warning butt "
        ></button>
        <button
          type="button"
          onClick={handleColor2}
          className="btn btn-primary butt "
        ></button>
        <button
          type="button"
          onClick={handleColor3}
          className="btn btn-danger butt "
        ></button>
        <button
          type="button"
          onClick={handleColor4}
          className="btn btn-dark butt "
        ></button>
        <button
          type="button"
          onClick={handleColor5}
          className="btn purple butt  "
        ></button>
      </div>
    </ThemeProvider>
  );
}

export default App;