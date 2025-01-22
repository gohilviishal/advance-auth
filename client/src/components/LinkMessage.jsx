import React from "react";
import { Link } from "react-router-dom";

const LinkMessage = ({ message, linkText, link }) => {
  return (
    <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
      <p className="text-sm text-gray-400">
        {message}{" "}
        <Link to={link} className="text-green-400 hover:underline">
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default LinkMessage;
