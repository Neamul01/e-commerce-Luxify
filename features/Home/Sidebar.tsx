import { Aside } from "@mantine/core";
import React, { useState } from "react";

const Sidebar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Add the scroll event listener
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Aside
      className={`${
        scrolled ? "absolute top-10 left-[30rem]" : "sticky left-10 top-8"
      } bg-red-500 p-4 h-28 w-2 z-50`}
    >
      <p>This div will move up when you scroll down!{window.scrollY}</p>
    </Aside>
  );
};

export default Sidebar;
