import React, { createContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";
import Modal from "./Modal";
 // Import the Modal component

// Create a context for theme switching
export const themeContext = createContext<
  ((switchTheme: DefaultTheme) => void) | null
>(null);

function App() {
  // Get theme and theme loading state from useTheme hook
  const { theme, themeLoaded, setMode } = useTheme();

  // State to manage selected theme
  const [selectedTheme, setSelectedTheme] = useState(theme);

  // State to control modal visibility
  const [showModal, setShowModal] = useState(true); // Set to true initially to always show on initial load

  // Disable browser's default behavior
  // to prevent the page from scrolling when Up Arrow or Down Arrow is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown"].includes(e.code)) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Effect to update selected theme when themeLoaded changes
  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // Effect to update meta tag colors when selectedTheme changes
  useEffect(() => {
    const themeColor = theme.colors?.body;

    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    const maskIcon = document.querySelector("link[rel='mask-icon']");
    const metaMsTileColor = document.querySelector(
      "meta[name='msapplication-TileColor']"
    );

    metaThemeColor && metaThemeColor.setAttribute("content", themeColor);
    metaMsTileColor && metaMsTileColor.setAttribute("content", themeColor);
    maskIcon && maskIcon.setAttribute("color", themeColor);
  }, [selectedTheme]);

  // Function to switch themes
  const themeSwitcher = (switchTheme: DefaultTheme) => {
    setSelectedTheme(switchTheme);
    setMode(switchTheme);
  };

  // Function to handle when user clicks "No" in the modal
  const handleNoClick = () => {
    // Redirect user to specified URL
    window.location.href = "https://portfolio-react-khushveer.vercel.app/";
  };

  return (
    <>
      <h1 className="sr-only" aria-label="Terminal Portfolio">
        Terminal Portfolio
      </h1>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle />
          <themeContext.Provider value={themeSwitcher}>
            <Terminal />
          </themeContext.Provider>
          {/* Render modal if showModal is true */}
          {showModal && (
  <Modal
    onYes={() => setShowModal(false)}
    onNo={handleNoClick}
  />
)}
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
