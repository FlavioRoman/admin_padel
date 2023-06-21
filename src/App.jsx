import { useState } from "react";
import { container, element } from "./utils/animation";
import { AnimatePresence, motion } from "framer-motion";

import { FaBars } from "react-icons/fa";

import { initialTabs as tabs } from "./components/Options";

function App() {
  const [show, setShow] = useState(true);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleClickLink = (item) => {
    setSelectedTab(item);
    setShow(!show);
  };

  return (
    <>
      <nav>
        <div className="option" onClick={() => setShow(!show)}>
          <FaBars size={25} />
        </div>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={container}
          className={show && "hidden"}
        >
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              variants={element}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => handleClickLink(item)}
            >
              {item.icon}
              {`${item.name}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </motion.li>
          ))}
        </motion.ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            className="container"
            key={selectedTab ? selectedTab.name : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.label : ""}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
