"use client";
import React, { useState, useEffect } from "react";

const HeaderTop = () => {
  const [shortcutData, setShortcutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.testvalley.kr/main-shortcut/all");
        const data = await response.json();
        setShortcutData(data);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="border rounded-small">
      <div className="container py-6">
        <div className="flex justify-between items-center flex-wrap"> {/* Add flex-wrap to wrap items to the next line in mobile */}
          {shortcutData.map((shortcut) => (
            <div key={shortcut.mainShortcutId} className="text-center w-1/2 mb-4"> {/* Use w-1/2 to make it half width on small screens */}
              <a
                href={shortcut.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="header_top__icon_wrapper"
              >
                <img
                  src={shortcut.imageUrl}
                  alt={shortcut.title}
                  className="w-12 h-12"  {/* Adjust the width and height of the icon */}
                />
              </a>
              <p className="text-xs mt-1">{shortcut.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
