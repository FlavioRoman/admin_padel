import { useState } from "react";
import { motion } from "framer-motion";
import { allOptions as tabs } from "../utils/options";

export const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <nav>
      <ul>
        {tabs.map((item) => (
          <li
            key={item}
            onClick={() => setSelectedTab(item)}
            className={item === selectedTab ? "selected" : ""}
          >
            {`${item}`}
            {item === selectedTab ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};
