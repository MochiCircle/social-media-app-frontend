import React, { useState } from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-regular-svg-icons";
import "./Theme.scss";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  document.documentElement.className = "";
  document.documentElement.classList.add(`theme-${theme}`);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.className = "";
    document.documentElement.classList.add(`theme-${newTheme}`);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <Button className="theme-toggler" onClick={changeTheme}>
      {theme === "light" ? (
        <FontAwesomeIcon icon={faMoon} fixedWidth />
      ) : (
        <FontAwesomeIcon icon={faLightbulb} fixedWidth />
      )}
    </Button>
  );
};

export default ThemeToggle;
