import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "components/atoms/Button";
import { ThemeProvider } from "components/atoms/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <h2>Hello</h2>
        <Button>Hi</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
