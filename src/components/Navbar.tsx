"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
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
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">


        {shortcutData.map((shortcut) => (
              <div key={(shortcut as any).mainShortcutId}>
                <a
                  href={(shortcut as any).linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={(shortcut as any).imageUrl}
                    alt={(shortcut as any).title}
                    className="w-16 h-16 justify-center"
                  />
                </a>
                <p className="text-xs mt-1">{(shortcut as any).title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
