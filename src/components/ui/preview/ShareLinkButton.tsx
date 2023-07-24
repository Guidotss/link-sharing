"use client";

import Cookies from "js-cookie";


export const ShareLinkButton = () => {
 
  const handleShareLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  }

  return (
    <button 
      className="px-5 py-2 rounded-lg bg-purple text-white font-semibold hover:bg-soft_purple transition duration-300 ease-in-out"
      onClick={handleShareLink}
    >
      Share Link
    </button>
  );
};
