import style from "./styles.css";
import { motion } from "framer-motion";

function MousePointer({name}) {

    // console.log("from mouse", name);
  const variants = {
    default: {
      x: name.x -16,
      y: name.y -16,
    },
  };

  return (
    <motion.div
      className="mouse-pointer"
      variants={variants}
      animate="default"
      style={{ zIndex: 9999 }}
    />
  );
}

export default MousePointer;
