// import Link from "next/link";
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
              <div key={shortcut.mainShortcutId}>
                <a
                  href={shortcut.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  // className="header_top__icon_wrapper"
                >
                  <img
                    src={shortcut.imageUrl}
                    alt={shortcut.title}
                    className="w-6 h-6"
                  />
                </a>
                <p className="text-xs mt-1">{shortcut.title}</p>
              </div>
            ))}
            
          {/* <Link className="navbar__link relative" href="#">
            HOME
          </Link>
          <Link className="navbar__link relative" href="#">
            CATEGORIES
          </Link>
          <Link className="navbar__link relative" href="#">
            {`MEN'S`}
          </Link>
          <Link className="navbar__link relative" href="#">
            {`WOMEN'S`}
          </Link>
          <Link className="navbar__link relative" href="#">
            JEWELRY
          </Link>
          <Link className="navbar__link relative" href="#">
            PERFUME
          </Link>
          <Link className="navbar__link relative" href="#">
            BLOG
          </Link>
          <Link className="navbar__link relative" href="#">
            HOT OFFERS
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
