"use client";
import { motion } from "framer-motion";

// de corectat any ca ii hueta ebanaia
const TypingText = ({ text }: any) => {
  //const text = "Framer Motion is a really cool tool".split(" ");
  //const res = text.split(" ");
  return (
    <div>
      {text.split("").map((el: string, i: number) => (
        <motion.span
          className="text-4xl "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}
        </motion.span>
      ))}
    </div>
  );
};

export default TypingText;
