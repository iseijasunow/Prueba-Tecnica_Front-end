import React from "react";
import { motion } from "framer-motion";
import Form from "../../components/Form/Form";
import "../../styles/styles.scss";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="Home">
        <main>
          <Form />
        </main>
      </div>
    </motion.div>
  );
}
