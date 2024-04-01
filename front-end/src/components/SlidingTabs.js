import React, { useState, useEffect, useRef } from 'react';

const SlidingTabBar = () => {
  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const allTabs = [
    {
      id: "Personal",
      name: "Personal Details",
    },
    {
      id: "Address",
      name: "Address",
    },
    {
      id: "Contact",
      name: "Contact Details",
    },
    {
      id: "Payment",
      name: "Payment Methods",
    },
  ];

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);
  
  return (
    <ul className="nav nav-tabs">
      {allTabs.map((tab, index) => (
        <li className="nav-item" key={index}>
          <a
            className={`nav-link ${activeTabIndex === index ? 'active' : ''}`}
            href="#"
            ref={(el) => (tabsRef.current[index] = el)}
            onClick={() => { this.props.onTabChange(tab.id); }}


          >
            {tab.name}
          </a>
        </li>
      ))}
      <span
        className="tab-underline"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      />
    </ul>
  );
};

export default SlidingTabBar;
