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
        <div className="flex justify-between items-center flex-wrap">
          {shortcutData.map((shortcut) => (
            <div key={(shortcut as any).mainShortcutId} className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
              <a
                href={(shortcut as any).linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="header_top__icon_wrapper"
              >
                <img
                  src={(shortcut as any).imageUrl}
                  alt={(shortcut as any).title}
                  className="w-12 h-12" 
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

export default HeaderTop;
// 구매할지 말지 고민 중이라면