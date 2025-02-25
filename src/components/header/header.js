import { useRef } from "react";
import { motion } from "framer-motion";
import "./header.css";
import { BuddhaModel } from "../BuddhaModel/BuddhaModel";
const Header = () => {
  return (
    <header className="header">
      <motion.h1
        className="header__title"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        whileInView={{ y: 0 }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, delay: 0.25 }}
      >
        Bamiyan The land of wonders
      </motion.h1>
      <BuddhaModel />
    </header>
  );
};
export default Header;
