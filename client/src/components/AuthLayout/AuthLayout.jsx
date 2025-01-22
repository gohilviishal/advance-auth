import React from "react";
import { motion } from "framer-motion";
import LinkMessage from "../LinkMessage";

const AuthLayout = ({ children, headText, message, link, linkText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="px-8 py-5">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          {headText}
        </h2>
        {children}
      </div>
      {message && link && linkText ? (
        <LinkMessage message={message} link={link} linkText={linkText} />
      ) : null}
    </motion.div>
  );
};

export default AuthLayout;
